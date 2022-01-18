import { MigrationInterface, QueryRunner } from "typeorm";

export class controleApiMigrations1642524261615 implements MigrationInterface {
  name = "controleApiMigrations1642524261615";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`colaboradores\` (\`id\` varchar(36) NOT NULL, \`identificacao\` varchar(255) NOT NULL, \`nome\` varchar(255) NOT NULL, \`cargo\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`colaboradores\``);
  }
}
