import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './routes';
// import { MongoDb } from "./db/mongoDB";

class App  {
    public app: express.Application;
    public routesProvider: Routes = new Routes();
    // public db: MongoDb = new MongoDb();

    constructor(){
        this.app = express();
        this.config();
        this.routesProvider.routes(this.app);
        // this.db.mongoSetup();
    }

    public config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
}

export default new App().app;
