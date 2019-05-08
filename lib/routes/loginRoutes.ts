import * as express from "express";
import {LoginController} from "../controllers/loginController";

const controller = new LoginController();

const loginRoutes = express.Router();

loginRoutes
/* @oas [post] /login Autentifica a un usuario
 * description: "Autentifica o un usuario."
 * tags:
 * - login
 * parameters:
 * - (body) id {String} Id de usuario.
 * - (body) pass {String} contraseña de usuario.
 * responses:
 *  "200":
 *    description: "Usuario encontrado, Status OK / Usuario no encontrado, Status KO."
 */
  .post( "/",controller.auth)
  
export = loginRoutes;
