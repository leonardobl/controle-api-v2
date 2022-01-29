import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Celulares from "../../celulares/typeorm/entity";
import Notebooks from "../../notebooks/typeorm/entity";
import NotebooksCustomRepository from "../../notebooks/typeorm/repository";
import Colaboradores from "../typeorm/entity";
import ColaboradoresRepository from "../typeorm/repository";

interface IColaborador {
  id: string;
  identificacao?: string;
  imgName?: string;
  imgPath?: string;
  username?: string;
  password?: string;
  nome?: string;
  cargo?: string;
  celular?: string;
  notebook?: string;
}

interface IUpdateColaborador {
  id: string;
  identificacao?: string;
  imgName?: string;
  imgPath?: string;
  username?: string;
  password?: string;
  nome?: string;
  cargo?: string;
  celular?: Celulares;
  notebook?: Notebooks;
}

class UpdateColaboradorService {
  public async execute(data: IColaborador): Promise<Colaboradores> {
    const newData = {} as IUpdateColaborador;
    Object.assign(newData, data);

    const colaboradoresRepository = getCustomRepository(
      ColaboradoresRepository
    );

    const colaboradorOld = await colaboradoresRepository.findById(newData.id);
    if (!colaboradorOld) throw new AppError("colaborador not found");

    if (data.notebook) {
      const notebookRepository = getCustomRepository(NotebooksCustomRepository);
      const notebook = await notebookRepository.findOne({
        where: { id: data.notebook },
      });

      if (!notebook) throw new AppError("Notebook not found");
      newData.notebook = notebook;
    }

    if (!data.notebook) {
      if (colaboradorOld.notebook) {
        colaboradorOld.notebook = null;
      }
    }

    const newColaboradeor = await colaboradoresRepository.merge(
      colaboradorOld,
      newData
    );

    await colaboradoresRepository.save(newColaboradeor);
    return newColaboradeor;
  }
}

export default new UpdateColaboradorService();
