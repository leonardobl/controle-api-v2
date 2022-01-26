import { EntityRepository, Repository } from "typeorm";

import Notebooks from "../entity";

@EntityRepository(Notebooks)
class NotebooksCustomRepository extends Repository<Notebooks> {
  public async findByNumeroPatrimonio(
    numeroPatrimonio: string
  ): Promise<Notebooks | undefined> {
    const notebook = await this.findOne({ where: { numeroPatrimonio } });
    return notebook;
  }

  public async findByNumeroSerio(
    numeroSerie: string
  ): Promise<Notebooks | undefined> {
    const notebook = await this.findOne({ where: { numeroSerie } });
    return notebook;
  }
}

export default NotebooksCustomRepository;
