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
  public async execute(data: ICelular): Promise<Celulares> {
    // CRIADO UM OBJ COM O TIPO(ATRIBUTOS) IMEIS NECESSITA
    const newImeis = {} as IImei;
    // DESESTRUTURAÇÃO DOS ATRIBUTOS

    const celularRepository = getCustomRepository(CelularesCustomRespository);

    const celularOld = await celularRepository.findOne({
      where: { id: data.id },
    });
    if (!celularOld) {
      if (data.imgPath) await removeFile(data.imgPath);
      throw new AppError("Celular not found");
    }

    if (celularOld.imgPath) await removeFile(celularOld.imgPath);

    const celularUpdated = await celularRepository.merge(celularOld, data);
    await celularRepository.save(celularUpdated);

    const condicaoUpdateImeis =
      (data.imei1 && data.imei1 !== celularOld.imeis.imei1) ||
      (data.imei2 && data.imei2 !== celularOld.imeis.imei2);

    if (condicaoUpdateImeis) {
      newImeis.id = celularOld.imeis.id;
      newImeis.imei1 = data.imei1;
      newImeis.imei2 = data.imei2;

      await UpdateImeiService.execute(newImeis);

      return celularUpdated;
    }

    return celularUpdated;
  }
}

export default new UpdateCelularService();
