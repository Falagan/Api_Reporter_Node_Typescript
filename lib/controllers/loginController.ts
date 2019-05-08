import { User } from "../models/userModel";
import { bcrypt } from "bcrypt";

export class LoginController {

  public auth(req, res) {
    User.findOne({ id: req.body.Id }, (err, user) => {
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
      //Usuario o contraseña incorrectos
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

  /**Prueba de Test*/
  public test(){
    return 'Test';
  }
}
