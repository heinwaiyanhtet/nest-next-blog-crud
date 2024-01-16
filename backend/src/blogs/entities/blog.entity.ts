import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string

    @Column({ type: 'text' })
    description : string

    @Column()
    createdBy : string
}
