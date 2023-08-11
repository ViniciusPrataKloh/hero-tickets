import express, { Application } from 'express';
import { connect } from './infra/mongodb/database';
import { errorMiddleware } from './middlewares/error.middleware';

class App{
  public app: Application;

  constructor(){
    this.app = express();
    this.middlewares();
    this.connectDatabase();
    this.routes();
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(errorMiddleware)
  }

  routes(){

  }

  connectDatabase(){
    connect();
  }

  listen(){
    this.app.listen(3333, () => {
      console.log("Server in running on port 3333");
    })
  }

}

export { App };
