import { Injectable } from '@angular/core';
import { Event } from '../shared/models/shared-form.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [];

  public addEvent(event: Event): void {
    this.events.push(event);
  }

  public removeEvent(_event: Event): void {
    this.events = this.events.filter((event) => event.id !== _event.id);
  }


  public updateEvent(event: Event): void {
    this.events = this.events.map(_event => (_event.id === event.id) ? event : _event)
  }

  public getEvents(): Event[]{
    return this.events;
  }

  public findById(id: string):Event {
    return this.events.filter(event => event.id === id)[0]
  }

  constructor() {}
}
