import { Repository, EntityRepository } from "typeorm";

import Imeis from "../entity";

@EntityRepository(Imeis)
export class ImeisCustomRepository extends Repository<Imeis> {
  public async findByImei(imei: string): Promise<Imeis | undefined> {
    const isImei = await this.findOne({
      where: [{ imei1: imei }, { imei2: imei }],
    });
    return isImei;
  }
}
