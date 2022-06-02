import { Router } from "express";
import Products from "../controllers/ProductsControllers";

const productrRouter = Router();
const Product = new Products();

productrRouter.get(
  '/',
  Product.index,
);
productrRouter.post(
  '/',
  Product.create,
);
  export default productrRouter;