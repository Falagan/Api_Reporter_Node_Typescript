import {Request, Response} from "express";
import {User} from "../models/userModel";


export class UsersController {

    /**Autentificación de Usuario*/
    public auth(req: Request, res: Response) {
        /**Busqueda usuario*/
        User.find({userName: req.body.Id})
            .then((users) => {
                res.status(200).json({
                    status: "OK",
                    msg: "Usuario encontrado",
                    users
                });
            })
            .catch((err) => {
                res.status(404).json({
                    status: "KO",
                    msg: "Usuario no encontrado."
                });
            });
    }

    /**Creación de Usuario*/
    public create(req:Request, res: Response){
        res.status(200).json(
            {
                status: 'OK',
                msg: 'Ruta a crear usuario. Exito.'
            }
        )
    }
}
