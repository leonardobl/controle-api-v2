import { EntityRepository, Repository } from "typeorm";

import Notebooks from "../entity";

@EntityRepository(Notebooks)
class NotebooksRepository extends Repository<Notebooks> {
  public async findByNumeroPatrimonio(
    numeroPatrimonio: string
  ): Promise<Notebooks | undefined> {
    const notebook = await this.findOne({ where: { numeroPatrimonio } });
    return notebook;
  }
}

export default NotebooksRepository;
