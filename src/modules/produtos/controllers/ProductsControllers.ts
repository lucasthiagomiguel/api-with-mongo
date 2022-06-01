import { Request, Response } from "express";
import CreateUserService from "../services/CreateProductsService";

export default class UsersController {
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