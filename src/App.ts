import express, { Application } from 'express';
import { errorMiddleware } from './application/middlewares/error.middleware';
import { EventsRoutes } from './application/routes/events.routes';
import { connect } from './infra/mongodb/database';

class App{
  public app: Application;
  
  private eventsRoutes = new EventsRoutes();

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
    this.app.use('/events', this.eventsRoutes.router);
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
