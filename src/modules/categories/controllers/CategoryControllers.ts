import { Request, Response } from "express";
import CreateUserService from "../services/CreateCategoryService";
import ListProductService from '../services/ListCategoryService';
import ShowCategoryService from '../services/ShowCategoryService';
import UpdateCategoryService from '../services/UpdateCategoryService';
import DeleteCategoryService from '../services/DeleteCategoryService';

export default class UsersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const showProduct = new ShowCategoryService();
    
        const product = await showProduct.execute({ id });
    
        return response.json(product);
      }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,description} = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            description,
            ativo:1
        });

        return response.json({status:"false",user});
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const {name,description,ativo} = request.body;
        const { id } = request.params;
    
        const updateProduct = new UpdateCategoryService();
    
        const product = await updateProduct.execute({
            id,
            name,
            description,
            ativo
        });
    
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const updateProduct = new DeleteCategoryService();
    
        const product = await updateProduct.execute({
            id,
            ativo:0
        });
    
        return response.json(product);
    }
    
}