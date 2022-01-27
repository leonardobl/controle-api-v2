import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("imeis")
class Imeis {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  imei1: string;

  @Column("varchar", { nullable: true })
  imei2: string;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at: Date;
}

export default Imeis;
