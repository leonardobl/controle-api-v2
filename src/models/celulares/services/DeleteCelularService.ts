import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import removeFile, { verify } from "../../../shared/functions/removeFiles";
import { ImeisCustomRepository } from "../../imeis/typeorm/repository";
import { CelularesCustomRespository } from "../typeorm/repository";

class DeleteCelularService {
  public async execute(id: string) {
    const celularRepository = getCustomRepository(CelularesCustomRespository);
    const imeisRepository = getCustomRepository(ImeisCustomRepository);

    const celular = await celularRepository.findOne({ where: { id } });
    if (!celular) throw new AppError("Celular not found");

    if (await verify(celular.imgPath)) await removeFile(celular.imgPath);

    const imei = await imeisRepository.findById(celular.imeis.id);
    await celularRepository.remove(celular);
    if (imei) await imeisRepository.remove(imei);
  }
}

export default new DeleteCelularService();
