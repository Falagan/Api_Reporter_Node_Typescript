import {Application } from "express";
import * as userRoutes from './userRoutes';
import * as loginRoutes from './loginRoutes';
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require ( '../../oas.json' );
const options = require ('../../cssSwagger.json');

class Routes {
  public routes(app: Application): void {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
    app.use('/users', userRoutes);
    app.use('/login', loginRoutes);
  }
}

export { Routes };


 
