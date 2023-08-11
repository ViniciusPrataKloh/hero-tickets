import { Event } from "../../domain/entities/event.entity";

interface IEventsRepository{
  create(event: Event): Promise<Event>;
  
}

export { IEventsRepository };
