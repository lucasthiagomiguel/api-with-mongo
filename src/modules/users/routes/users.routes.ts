import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from "../controllers/UsersController";

const userRouter = Router();
const usersController = new UsersController();

userRouter.post(
    '/',
    usersController.create,
  );
  export default userRouter;