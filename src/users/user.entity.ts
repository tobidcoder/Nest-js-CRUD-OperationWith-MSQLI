import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('date') 
    dateOfBirth: Date;

    @Column({length: 100})
    description: string;

    @Column({length: 100})
    userName: string;

    @Column()
    isActive: boolean;

}
