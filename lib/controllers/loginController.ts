import { User } from "../models/userModel";
const bcrypt = require("bcrypt");

export class loginController {
  /**Autentificacion de un usuario*/
  public test(){
    return 'Vamos';
  }

  /**Autentificacion de un usuario*/
  public test2(){
    return 'Vamos';
  }
  
  public auth(req, res) {
    User.findOne({ userName: req.body.Id }, (err, user) => {
      //Error consulta
      if (err) {
        return res.status(404).json({
          status: "KO",
          msg: "No se ha podido realizar la operación solicitada."
        });
      }
      //Usuario no encontrado
      if (!user) {
        return res.status(200).json({
          status: "KO",
          msg: "Usuario no encontrado."
        });
      }
      //Usuario o contraseña incorectos
      if (!bcrypt.compareSync(req.body.pass, user.password)) {
        return res.status(200).json({
          status: "KO",
          msg: "Usuario contraseña incorrectos",
          user
        });
      }
      //Usuario autenticado
      return res.status(200).json({
        status: "OK",
        msg: "Usuario encontrado",
        user
      });
    });
  }
}
