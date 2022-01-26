import { EntityRepository, Repository, In } from "typeorm";

import Celulares from "../entity";

@EntityRepository(Celulares)
export class CelularesCustomRespository extends Repository<Celulares> {
  public async findByImei(imeis: string[]): Promise<Celulares | undefined> {
    const celular = await this.findOne({ where: { imeis: In([imeis]) } });
    return celular;
  }
}
