import { Request } from "express";
import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Imeis from "../typeorm/entity";
import { ImeisCustomRepository } from "../typeorm/repository";

interface IImei {
  imei1: string;
  imei2?: string;
}

class UpdateImeiService {
  public async execute(req: Request): Promise<Imeis> {
    const imeisRepository = getCustomRepository(ImeisCustomRepository);
    const { id } = req.params;
    const newDatas = {} as IImei;
    Object.assign(newDatas, req.body);

    let isImei = await imeisRepository.findForConflict(id, newDatas.imei1);

    if (!isImei && newDatas.imei2) {
      isImei = await imeisRepository.findForConflict(id, newDatas.imei2);
    }

    console.log("----------------------------------------------");
    console.log(isImei);
    console.log("----------------------------------------------");

    if (isImei) throw new AppError("Imei already existis");

    const imeiOld = await imeisRepository.findById(id);
    if (!imeiOld) throw new AppError("Imei not found");

    const newImei = imeisRepository.merge(imeiOld, newDatas);
    await imeisRepository.save(newImei);
    return newImei;
  }
}

export default new UpdateImeiService();
