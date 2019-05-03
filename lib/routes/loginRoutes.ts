import * as express from "express";
import {loginController} from "../controllers/loginController";

let controller = new loginController();

let loginRoutes = express.Router();

loginRoutes
  /*
   * @oas [get] /login
   * description: Se encarga de la autentificación de usuarios
   */
  .post( "/",controller.auth)
  
export = loginRoutes;
