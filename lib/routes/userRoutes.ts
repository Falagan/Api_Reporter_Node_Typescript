import * as express from "express";
import { UsersController } from "../controllers/usersController";

const controller = new UsersController();

const userRoutes = express.Router();

userRoutes
  /*
   * @oas [get] /users/auth
   * description: Se encarga de la autentificación de un usuario.
   * responses:
   *   "200":
   *     description: "Usuario autentificado."
   *     schema:
   *       type: "JSON"
   *       items: "$ref": "#/models/userModel"
   */
  .post("/auth", controller.create)

export = userRoutes;
