import express, { Application } from 'express';
import { getConnection } from './infra/mongodb/database';

class App{
  public app: Application;

  constructor(){
    this.app = express();
    this.middlewares();
    this.connectDatabase();
    this.routes();
    this.errors();
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
  }

  routes(){

  }

  errors(){

  }

  connectDatabase(){
    getConnection();
  }

  listen(){
    this.app.listen(3333, () => {
      console.log("Server in running on port 3333");
    })
  }

}

export { App };
