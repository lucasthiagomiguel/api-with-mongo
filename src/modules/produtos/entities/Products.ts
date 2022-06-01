import {Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn} from "typeorm";

@Entity('products')
export class Products{
    @ObjectIdColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    telefone:string;

    @Column()
    email:string;

    @Column()
    senha:string;

    @Column()
    ativo:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

