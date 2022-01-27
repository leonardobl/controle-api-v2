import { Repository, EntityRepository, Not } from "typeorm";

import Imeis from "../entity";

@EntityRepository(Imeis)
export class ImeisCustomRepository extends Repository<Imeis> {
  public async findByImei(imei: string): Promise<Imeis | undefined> {
    const isImei = await this.findOne({
      where: [{ imei1: imei }, { imei2: imei }],
    });
    return isImei;
  }

  public async findForConflict(
    Id: string,
    Imei: string
  ): Promise<Imeis | undefined> {
    console.log(`id : ${Id}`);
    console.log(`Imei : ${Imei}`);

    const conflict = await this.findOne({
      where: [
        { id: Not(Id), imei1: Imei },
        { id: Not(Id), imei2: Imei },
      ],
    });

    return conflict;
  }

  public async findById(id: string): Promise<Imeis | undefined> {
    const imei = await this.findOne({ where: { id } });
    return imei;
  }
}
