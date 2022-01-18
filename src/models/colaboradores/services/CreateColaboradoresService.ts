import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

interface IRequest {
  identificacao: string;
  nome: string;
  cargo?: string;
}

class CreateColaboradoresService {
  async execute({
    identificacao,
    nome,
    cargo,
  }: IRequest): Promise<Colaboradores> {
    const ColaboradorRepository = getCustomRepository(ColaboradoresRepository);
    const colaboradorAlreadyExists =
      await ColaboradorRepository.findByIdentificacao(identificacao);

    if (colaboradorAlreadyExists) {
      throw new AppError("Colaborador already exists", 500);
    }

    const colaborador = await ColaboradorRepository.create({
      identificacao,
      nome: nome.trim().toUpperCase(),
      cargo: cargo?.trim()?.toUpperCase(),
    });
    ColaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default new CreateColaboradoresService();
