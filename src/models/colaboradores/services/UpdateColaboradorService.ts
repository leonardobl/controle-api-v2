import { Request } from "express";
import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

class UpdateColaboradorService {
  public async execute(req: Request): Promise<Colaboradores> {
    const colaboradoresRepository = getCustomRepository(
      ColaboradoresRepository
    );
    const colaborador = await colaboradoresRepository.findById(req.params.id);
    if (!colaborador) throw new AppError("id not found");
    colaboradoresRepository.merge(colaborador, req.body);
    await colaboradoresRepository.save(colaborador);
    return colaborador;
  }
}

export default new UpdateColaboradorService();
