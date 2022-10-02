import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/authentication/auth-guard.service';
import { CreateEditEventComponent } from './features/create-edit-event/create-edit-event.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ViewEventsComponent } from './features/view-events/view-events.component';

const routes: Routes = [
  { path: '', component: ViewEventsComponent, canActivate: [AuthGuard] },
  {
    path: 'create',
    component: CreateEditEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: CreateEditEventComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
