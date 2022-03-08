import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,email,senha} = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            senha,
            ativo:1
        });

        return response.json(user);
    }
}