import { Router } from "express";

class EventsRoutes {
  public router: Router;

  constructor(){
    this.router = Router();
    this.initRoutes();
  }

  initRoutes(){
    this.router.post('/');
  }
}

export { EventsRoutes };
