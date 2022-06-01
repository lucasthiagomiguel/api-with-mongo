import { Router } from "express";
import userRouter from "@modules/users/routes/users.routes";
import productsRouter from "@modules/produtos/routes/products.routes";
import sessionrRouter from "@modules/users/routes/sessions.routes";
import starWarsRouter from "@modules/starWars/routes/star.routes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', sessionrRouter);
routes.use('/star', starWarsRouter);
routes.use('/products', productsRouter);

export default routes;