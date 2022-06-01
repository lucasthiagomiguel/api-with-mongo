import { EntityRepository, Repository } from "typeorm";
import { Products } from "../entities/Products";

@EntityRepository(Products)
export  class ProductsRepository extends Repository<Products>{
    public async findByName(name: string): Promise<Products | undefined>{
        const user = await this.findOne({
            where:{
                name,
            }
        });
        return user;
    }

    public async findById(id: number): Promise<Products | undefined>{
        const user = await this.findOne({
            where:{
                id,
            }
        });
        return user;
    }

    public async findByEmail(email: string): Promise<Products | undefined>{
        const user = await this.findOne({
            where:{
                email,
            }
        });
        return user;
    }
}