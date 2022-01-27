import { Request } from "express";
import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Imeis from "../typeorm/entity";
import { ImeisCustomRepository } from "../typeorm/repository";

interface IImei {
  imei1: string;
  imei2?: string;
}
class CreateImeisService {
  public async execute(req: Request): Promise<Imeis | undefined> {
    const data = {} as IImei;
    Object.assign(data, req.body);
    const imeisRepository = getCustomRepository(ImeisCustomRepository);
    let isImei = await imeisRepository.findByImei(data.imei1);
    if (!isImei && data.imei2) {
      isImei = await imeisRepository.findByImei(data.imei2);
    }
    if (isImei) throw new AppError("Imei already exists");

    const imei = await imeisRepository.create(data);
    await imeisRepository.save(imei);
    return imei;
  }
}

export default new CreateImeisService();
