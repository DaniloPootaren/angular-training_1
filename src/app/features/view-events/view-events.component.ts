import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/shared-form.model';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss'],
})
export class ViewEventsComponent implements OnInit {
  constructor(private eventService: EventService, private router: Router) {}

  get events(): Event[] {
    return this.eventService.getEvents();
  }

  public editEvent(event: Event): void {
    this.router.navigate([`/edit/${event.id}`])
  }

  public removeEvent(event: Event) {
    this.eventService.removeEvent(event);
  }

  public addEvent(){
    this.router.navigate(['/create'])
  }

  ngOnInit(): void {}
}
