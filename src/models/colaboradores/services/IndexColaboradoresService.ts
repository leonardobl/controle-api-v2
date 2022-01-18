import { getCustomRepository } from "typeorm";

import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

class IndexColaboradoresService {
  async execute(): Promise<Colaboradores[]> {
    const colaboradoresRepository = getCustomRepository(
      ColaboradoresRepository
    );

    const colaboradores = await colaboradoresRepository.find();
    return colaboradores;
  }
}

export default new IndexColaboradoresService();
