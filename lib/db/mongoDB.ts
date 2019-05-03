import * as mongoose from 'mongoose';
const config = require ( '../../mainConfig.json' );
const mongoUrl = config.db.mongoDB.url;

class mongoDB {
  // public mongoSetup(): void {
  //   mongoose.Promise = global.Promise;
  //   mongoose.connect(mongoUrl, {useNewUrlParser: true})
  //     .then(
  //         () => {
  //       console.log('Conexión con mongoDb realizada.');
  //     })
  //     .catch(
  //         (err) => {
  //       console.log('Conexión con mongoDB fallida.', err);
  //     });
  // }
}

export { mongoDB };
