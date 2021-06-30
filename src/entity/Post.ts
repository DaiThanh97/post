import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100, nullable: false })
    title!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    content!: string;

    @Column({ type: "datetime", nullable: false })
    createBy!: Date;
}