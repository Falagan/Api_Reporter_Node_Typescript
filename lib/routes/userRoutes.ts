import * as express from "express";
import { usersController } from "../controllers/usersController";

let controller = new usersController();

let userRoutes = express.Router();

userRoutes
  /*
   * @oas [get] /users
   * description: Se encarga de la autentificación de usuarios
   */
  .post( "/",controller.create)
  
export = userRoutes;
