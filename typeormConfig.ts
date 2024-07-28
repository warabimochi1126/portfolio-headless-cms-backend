import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from 'dotenv';

config({ path: ".env" })

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true // 監視してたら保存した時にスキーマ更新走るっぽい？ 開発環境下のみtrueにしておく
}