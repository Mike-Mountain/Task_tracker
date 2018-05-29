import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SnipCodeComponent } from './snip-code/snip-code.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks-board', component: TasksBoardComponent },
  { path: 'single-task/:id', component: SingleTaskComponent },
  { path: 'new-task', component: CreateTaskComponent },
  { path: 'code-snip', component: SnipCodeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
