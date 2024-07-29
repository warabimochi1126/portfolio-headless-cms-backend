import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNullableProductLinks1722231708316 implements MigrationInterface {
    name = 'AddNullableProductLinks1722231708316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "productLinks" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "productLinks" SET NOT NULL`);
    }

}
