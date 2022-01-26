import { EntityRepository, Repository } from "typeorm";

import Celulares from "../entity";

@EntityRepository(Celulares)
export class CelularesCustomRespository extends Repository<Celulares> {
  public async findByImei(imei: string): Promise<Celulares | undefined> {
    const celular = await this.findOne({ where: { imeis: imei } });
    return celular;
  }
}
