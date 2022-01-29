import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Imeis from "../typeorm/entity";
import { ImeisCustomRepository } from "../typeorm/repository";

interface IImei {
  id: string;
  imei1: string;
  imei2?: string | null;
}

class UpdateImeiService {
  public async execute(Imei: IImei): Promise<Imeis> {
    const imeisRepository = getCustomRepository(ImeisCustomRepository);
    let isImei = await imeisRepository.findForConflict(Imei.id, Imei.imei1);

    if (!isImei && Imei.imei2) {
      isImei = await imeisRepository.findForConflict(Imei.id, Imei.imei2);
    }

    if (isImei) throw new AppError("Imei already existis");

    const imeiOld = await imeisRepository.findById(Imei.id);

    if (!imeiOld) throw new AppError("Imei not found");

    if (!Imei.imei2) {
      const data = {} as IImei;
      Object.assign(data, Imei);
      data.imei2 = null;

      const newImei = imeisRepository.merge(imeiOld, data);
      await imeisRepository.save(newImei);
      return newImei;
    }

    const newImei = imeisRepository.merge(imeiOld, Imei);
    await imeisRepository.save(newImei);
    return newImei;
  }
}

export default new UpdateImeiService();
