import { getCustomRepository } from "typeorm";

import Celulares from "../typeorm/entity";
import { CelularesCustomRespository } from "../typeorm/repository";

class IndexcelularesServices {
  public async execute(): Promise<Celulares[]> {
    const celularesRepository = getCustomRepository(CelularesCustomRespository);
    const celulares = await celularesRepository.find();
    return celulares;
  }
}

export default new IndexcelularesServices();
