import { Request, Response } from "express";
import CreateUserService from "../services/CreateProductsService";
import ListProductService from '../services/ListProductService';

export default class UsersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products);
    }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,price,variety,topSellers,image,category,more18,description,} = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            price,
            variety,
            topSellers,
            image,
            category,
            more18,
            description,
            ativo:1
        });

        return response.json({status:"false",user});
    }
}