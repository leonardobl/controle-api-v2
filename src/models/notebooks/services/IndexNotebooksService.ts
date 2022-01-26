import { getCustomRepository } from "typeorm";

import Notebooks from "../typeorm/entity";
import NotebooksCustomRepository from "../typeorm/repository";

class IndexNotebookService {
  public async execute(): Promise<Notebooks[]> {
    const notebookRepository = getCustomRepository(NotebooksCustomRepository);
    const notebooks = await notebookRepository.find();
    return notebooks;
  }
}

export default new IndexNotebookService();
