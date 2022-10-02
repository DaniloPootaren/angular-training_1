import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateEditEventComponent } from './features/create-edit-event/create-edit-event.component'
import { ReactiveFormsModule, } from '@angular/forms';
import { ViewEventsComponent } from './features/view-events/view-events.component';
import { NotFoundComponent } from './features/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateEditEventComponent,
    ViewEventsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
