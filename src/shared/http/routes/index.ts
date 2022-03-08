import { Router } from "express";
import userRouter from "@modules/users/routes/users.routes";
import sessionrRouter from "@modules/users/routes/sessions.routes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionrRouter);

export default routes;