import { getCustomRepository } from "typeorm";

import Imeis from "../typeorm/entity";
import { ImeisCustomRepository } from "../typeorm/repository";

class IndexImeisService {
  public async execute(): Promise<Imeis[]> {
    const imeisRepository = getCustomRepository(ImeisCustomRepository);
    const imeis = await imeisRepository.find();
    return imeis;
  }
}

export default new IndexImeisService();
