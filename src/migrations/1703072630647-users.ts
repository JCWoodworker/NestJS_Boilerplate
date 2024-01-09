import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1703072630647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "users" (
            "id" UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
            "password" character varying,
            "email" character varying NOT NULL UNIQUE,
            "role" character varying NOT NULL DEFAULT 'basic',
            "googleId" character varying)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "users"`);
  }
}
