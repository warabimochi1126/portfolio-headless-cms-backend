import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageSrcPath: string;

    @Column()
    deployUrl: string;

    @Column()
    productName: string;

    @Column()
    overview: string;

    @Column()
    mainTechnology: string;

    @Column()
    subTechnology: string;

    @Column("text", { array: true })
    productLinks: string[];
}