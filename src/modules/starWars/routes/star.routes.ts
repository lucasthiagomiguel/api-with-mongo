import { Router } from "express";
import StarWarsController from '../controllers/StarWarsController';
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";


const starWars = Router();
const starWarsController = StarWarsController;
starWars.use(isAuthenticated);

starWars.get('/',starWarsController.getPosts);
  export default starWars;