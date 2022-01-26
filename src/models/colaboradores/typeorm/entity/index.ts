import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Celulares from "../../../celulares/typeorm/entity";
import Notebooks from "../../../notebooks/typeorm/entity";

@Entity("colaboradores")
class Colaboradores {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  identificacao: string;

  @Column({ type: "varchar", nullable: true })
  imgName: string;

  @Column({ type: "varchar", nullable: true })
  imgPath: string;

  @Column({ type: "varchar", nullable: true })
  username: string;

  @Column({ type: "varchar", nullable: true })
  password: string;

  @OneToOne(() => Celulares, { eager: true })
  @JoinColumn()
  celular: Celulares;

  @OneToOne(() => Notebooks, { eager: true })
  @JoinColumn()
  notebook: Notebooks;

  @Column("varchar")
  nome: string;

  @Column({ type: "varchar", nullable: true })
  cargo: string;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at: Date;
}

export default Colaboradores;
