import { Request } from "express";
import { getCustomRepository } from "typeorm";

import CreateImeisService from "../../imeis/services/CreateImeisService";
import Imeis from "../../imeis/typeorm/entity";
import Celulares from "../typeorm/entity";
import { CelularesCustomRespository } from "../typeorm/repository";

interface ICelular {
  imgName?: string;
  imgPath?: string;
  marca: string;
  modelo: string;
  imeis: Imeis;
}

class CreateCelularService {
  public async execute(req: Request): Promise<Celulares> {
    const celularesRepository = getCustomRepository(CelularesCustomRespository);

    const imeis = await CreateImeisService.execute(req);

    const data = {} as ICelular;

    Object.assign(data, { ...req.body, imeis });

    const celular = celularesRepository.create(data);
    await celularesRepository.save(celular);
    return celular;
  }
}

export default new CreateCelularService();
