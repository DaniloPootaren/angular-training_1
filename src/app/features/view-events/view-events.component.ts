import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/shared-form.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss'],
})
export class ViewEventsComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  get events(): Event[] {
    return this.eventService.getEvents();
  }

  public editEvent(event: Event): void {
    this.router.navigate([`/edit/${event.id}`]);
  }

  public removeEvent(event: Event, content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          if (result === 'REMOVE') return this.eventService.removeEvent(event);
        }
      );
  }

  public addEvent() {
    this.router.navigate(['/create']);
  }


  ngOnInit(): void {}
}
