import { Request, Response } from "express";
import CreateUserService from "../services/CreateProductsService";
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class ProductsController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products);
    }
    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const showProduct = new ShowProductService();
    
        const product = await showProduct.execute({ id });
    
        return response.json(product);
      }
    public async create(request: Request, response: Response): Promise<Response>{
        const {name,price,variety,topSellers,image,category,more18,description} = request.body;
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

    public async update(request: Request, response: Response): Promise<Response> {
        const {name,price,variety,topSellers,image,category,more18,description,ativo} = request.body;
        const { id } = request.params;
    
        const updateProduct = new UpdateProductService();
    
        const product = await updateProduct.execute({
            id,
            name,
            price,
            variety,
            topSellers,
            image,
            category,
            more18,
            description,
            ativo
        });
    
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const updateProduct = new DeleteProductService();
    
        const product = await updateProduct.execute({
            id,
            ativo:0
        });
    
        return response.json(product);
    }
    
}