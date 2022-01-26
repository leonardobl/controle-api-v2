import { getCustomRepository } from "typeorm";

import Celulares from "../../celulares/typeorm/entity";
import Notebooks from "../../notebooks/typeorm/entity";
import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

interface IRequest {
  id: string;
  identificacao?: string;
  imgName?: string;
  imgPath?: string;
  username?: string;
  password?: string;
  celular?: Celulares;
  notebook?: Notebooks;
  nome?: string;
  cargo?: string;
}

class UpdateColaboradorService {
  public async execute(data: IRequest): Promise<Colaboradores> {
    const colaboradoresRepository = getCustomRepository(
      ColaboradoresRepository
    );
    const colaborador = await colaboradoresRepository.findById(data.id);
  }
}
