import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNullable1722230421087 implements MigrationInterface {
    name = 'AddNullable1722230421087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "imageSrcPath" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "deployUrl" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "subTechnology" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "subTechnology" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "deployUrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "imageSrcPath" SET NOT NULL`);
    }

}
