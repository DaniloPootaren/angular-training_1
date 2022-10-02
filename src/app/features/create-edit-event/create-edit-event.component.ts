import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/shared/models/shared-form.model';
import { nanoid } from 'nanoid';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-edit-event.component.html',
  styleUrls: ['./create-edit-event.component.scss'],
})
export class CreateEditEventComponent implements OnInit {
  public eventForm: any;
  public editMode: boolean = false;

  private generateId(): string {
    return nanoid();
  }

  public onSubmit() {
    if (this.editMode) {
      this.eventService.updateEvent(this.eventForm.value);
    } else {
      this.eventService.addEvent(this.eventForm.value);
    }
    this.router.navigate(['/']);
  }


  constructor(
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const eventId = params['id'];

      const initialVal = eventId
        ? this.eventService.findById(eventId)
        : ({} as Event);

      this.editMode = !!eventId;

      this.eventForm = new FormGroup({
        id: new FormControl(initialVal.id ? initialVal.id : this.generateId()),
        name: new FormControl(initialVal.name, [Validators.required]),
        description: new FormControl(initialVal.description, [
          Validators.required,
        ]),
        date: new FormControl(initialVal.date, [Validators.required]),
      });
    });
  }
}
