import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardProjectAComponent} from './dashboard-project-a/dashboard-project-a.component'
import { LoginProjectAComponent } from './login-project-a/login-project-a.component';

const routes: Routes = [
  { path: '', component: LoginProjectAComponent },
  { path: 'dashboard', component: DashboardProjectAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
