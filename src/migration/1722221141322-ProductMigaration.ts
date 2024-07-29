import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductMigaration1722221141322 implements MigrationInterface {
    name = 'ProductMigaration1722221141322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "imageSrcPath" character varying NOT NULL, "deployUrl" character varying NOT NULL, "productName" character varying NOT NULL, "overview" character varying NOT NULL, "mainTechnology" character varying NOT NULL, "subTechnology" character varying NOT NULL, "productLinks" text array NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
