import app from './app';
const config = require ( '../../mainConfig.json' );
const PORT = process.env.PORT || 3001;

//Inicio Server
 app.listen(PORT, () => {
     console.log('Servidor escuchando en el puerto: ' + PORT);
 });
