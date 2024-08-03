import { MigrationInterface, QueryRunner } from "typeorm";

export class FixValidation1722666463726 implements MigrationInterface {
    name = 'FixValidation1722666463726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "imageSrcPath" character varying, "deployUrl" character varying, "productName" character varying NOT NULL, "overview" character varying NOT NULL, "mainTechnology" character varying NOT NULL, "subTechnology" character varying, "productLinks" text array, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
