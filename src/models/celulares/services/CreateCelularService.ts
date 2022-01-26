import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Celulares from "../typeorm/entity";
import { CelularesCustomRespository } from "../typeorm/repository";

interface IRequest {
  imgName?: string;
  imgPath?: string;
  marca: string;
  modelo: string;
  imeis: string[];
}

class CreateCelularService {
  public async execute(data: IRequest): Promise<Celulares> {
    const celularesRepository = getCustomRepository(CelularesCustomRespository);

    const imeiAlreadyExists = await celularesRepository.findByImei(data.imeis);

    if (imeiAlreadyExists) throw new AppError("IMEI already exists");

    const celular = await celularesRepository.create(data);
    await celularesRepository.save(celular);
    return celular;
  }
}

export default new CreateCelularService();
