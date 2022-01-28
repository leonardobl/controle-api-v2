import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import Imeis from "../../../imeis/typeorm/entity";

@Entity("celulares")
class Celulares {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  imgName: string;

  @Column({ type: "varchar", nullable: true })
  imgPath: string;

  @Column("varchar")
  marca: string;

  @Column("varchar")
  modelo: string;

  @OneToOne(() => Imeis, { eager: true, cascade: true, onUpdate: "CASCADE" })
  @JoinColumn()
  imeis: Imeis;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at: Date;
}

export default Celulares;
