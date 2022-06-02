import { EntityRepository, Repository } from "typeorm";
import Products  from "../entities/Products";


@EntityRepository(Products)
export default class ProductsRepository extends Repository<Products>{
    public async findByName(name: string): Promise<Products | undefined>{
        const products = await this.findOne({
            where:{
                name,
            }
        });
        return products;
    }

    public async findById(id: number): Promise<Products | undefined>{
        const products = await this.findOne({
            where:{
                id,
            }
        });
        return products;
    }    
   
}