import * as express from "express";
import {LoginController} from "../controllers/loginController";

const controller = new LoginController();

const loginRoutes = express.Router();

loginRoutes
  /*
   * @oas [get] /login
   * description: Se encarga de la gestión del proceso de login.
   */
  .post( "/",controller.auth)
  
export = loginRoutes;
