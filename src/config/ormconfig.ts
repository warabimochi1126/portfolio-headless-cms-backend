import { config } from "dotenv"
import { DataSource } from "typeorm"

config({ path: ".env" })

export const dataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    entities: ["src/entity/*.entity.ts"],
    migrations: ['src/migration/*.ts'],
})

