import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  eventForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    date: new FormControl('', [
      Validators.required,
    ]),
  });

  onSubmit() {
    alert(JSON.stringify(this.eventForm.value));
  }

  constructor() {}

  ngOnInit(): void {}
}
