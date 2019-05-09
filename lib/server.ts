import app from './app';
const PORT = process.env.PORT || 3001;

//Inicio Server
 app.listen(PORT, () => {
     console.log('Servidor escuchando en el puerto: ' + PORT);
 });
