import * as mongoose from 'mongoose';
const config = require ( '../../mainConfig.json' );
const env = process.env.NODE_ENV || 'dev';
const mongoUrl = config[env].db.mongoDB.url;

class MongoDb {
  public mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl, {useNewUrlParser: true})
      .then(
          () => {
        console.log('Conexión con mongoDb realizada.');
      })
      .catch(
          (err) => {
        console.log('Conexión con mongoDB fallida.', err);
      });
  }
}

export { MongoDb };
