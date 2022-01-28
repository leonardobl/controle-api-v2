import { Request } from "express";
import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import removeFile from "../../../shared/functions/removeFiles";
import UpdateImeiService from "../../imeis/services/UpdateImeiService";
import Celulares from "../typeorm/entity";
import { CelularesCustomRespository } from "../typeorm/repository";

interface ICelular {
  id: string;
  marca?: string;
  molelo?: string;
  imgName?: string;
  imgPath?: string;
  imei1: string;
  imei2?: string;
}

interface IImei {
  id: string;
  imei1: string;
  imei2?: string;
}
class UpdateCelularService {
  public async execute(req: Request): Promise<Celulares> {
    // CRIADO UM OBJ COM O TIPO(ATRIBUTOS) QUE CELULAR e IMEIS NECESSITA
    const newData = {} as ICelular;
    const newImeis = {} as IImei;
    // DESESTRUTURAÇÃO DOS ATRIBUTOS
    Object.assign(newData, req.body);

    console.log(newData);
    console.log(newImeis);

    const celularRepository = getCustomRepository(CelularesCustomRespository);

    const celularOld = await celularRepository.findOne({
      where: { id: newData.id },
    });
    if (!celularOld) throw new AppError("Celular not found");

    // if (req.file) {
    //   newData.imgName = req.file.filename;
    //   newData.imgPath = req.file.path;

    //   if (celularOld.imgPath) await removeFile(celularOld.imgPath);
    // }

    const condicaoUpdateImeis =
      newData.imei1 ||
      (newData.imei2 && newData.imei1 !== celularOld.imeis.imei1) ||
      newData.imei2 !== celularOld.imeis.imei2;

    if (condicaoUpdateImeis) {
      newImeis.id = celularOld.imeis.id;

      const imeiUpdated = await UpdateImeiService.execute(newImeis);

      console.log(imeiUpdated);

      const celularUpdated = await celularRepository.merge(celularOld, newData);
      await celularRepository.save(celularUpdated);
      return celularUpdated;
    }

    const celularUpdated = await celularRepository.merge(celularOld, newData);
    await celularRepository.save(celularUpdated);
    return celularUpdated;
  }
}

export default new UpdateCelularService();
