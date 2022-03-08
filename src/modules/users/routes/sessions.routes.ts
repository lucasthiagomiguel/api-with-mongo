import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import SessionsController from "../controllers/SessionsController";


const sessionrRouter = Router();
const sessionsController = new SessionsController();

sessionrRouter.post(
    '/',
    celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
      },
    }),
    sessionsController.create,
  );
  export default sessionrRouter;