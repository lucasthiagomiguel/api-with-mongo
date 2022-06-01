import { Router } from "express";
import Products from "../controllers/ProductsControllers";

const productrRouter = Router();
const Product = new Products();

productrRouter.post(
    '/',
    Product.create,
  );
  export default productrRouter;