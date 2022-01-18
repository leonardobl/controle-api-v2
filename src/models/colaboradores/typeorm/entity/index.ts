import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("colaboradores")
class Colaboradores {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  identificacao: string;

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
