import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditEventComponent } from './features/create-edit-event/create-edit-event.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ViewEventsComponent } from './features/view-events/view-events.component';

const routes: Routes = [
  {path:"", component: ViewEventsComponent},
  {path:"create", component: CreateEditEventComponent},
  {path:"edit/:id", component: CreateEditEventComponent},
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
