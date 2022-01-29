import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import removeFile, { verify } from "../../../shared/functions/removeFiles";
import ColaboradoresRepository from "../typeorm/repository";

class DeleteColaboradorService {
  public async execute(id: string) {
    const colaboradorRepository = getCustomRepository(ColaboradoresRepository);
    const colaborador = await colaboradorRepository.findById(id);
    if (!colaborador) throw new AppError("Colaborador note found");

    if (await verify(colaborador.imgPath))
      await removeFile(colaborador.imgPath);

    await colaboradorRepository.remove(colaborador);
  }
}

export default new DeleteColaboradorService();
