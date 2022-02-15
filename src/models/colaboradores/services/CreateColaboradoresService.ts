import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import { criaUserName } from "../configs/criaUser";
import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

interface IRequest {
  identificacao: string;
  nome: string;
  cargo?: string;
  username?: string;
  autorizado?: boolean;
}

class CreateColaboradoresService {
  async execute({
    identificacao,
    nome,
    cargo,
    autorizado,
  }: IRequest): Promise<Colaboradores> {
    const data = {} as IRequest;

    Object.assign(data, {
      identificacao,
      nome: nome.trim().toUpperCase(),
      cargo: cargo?.trim()?.toUpperCase(),
      username: criaUserName(nome),
      autorizado,
    });

    const ColaboradorRepository = getCustomRepository(ColaboradoresRepository);

    const identificacaoAlreadyExists =
      await ColaboradorRepository.findByIdentificacao(data.identificacao);

    if (identificacaoAlreadyExists)
      throw new AppError("identity already exists");

    const nameAlreadyExists = await ColaboradorRepository.findByName(data.nome);

    if (nameAlreadyExists) throw new AppError("Name already exists");

    const colaborador = await ColaboradorRepository.create({ ...data });
    ColaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default new CreateColaboradoresService();
