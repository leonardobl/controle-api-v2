import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Celulares from "../../../celulares/typeorm/entity";

@Entity("imeis")
class Imeis {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  imei1: string;

  @Column("varchar", { nullable: true })
  imei2: string;

  // @OneToOne(() => Celulares, { onUpdate: "CASCADE" })
  // celular: Celulares;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at: Date;
}

export default Imeis;
