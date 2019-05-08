import * as express from "express";
import { UsersController } from "../controllers/usersController";

const controller = new UsersController();

const userRoutes = express.Router();

userRoutes
  .post("/auth", controller.create)

export = userRoutes;
