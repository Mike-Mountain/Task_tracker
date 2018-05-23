import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskDashComponent } from './task-dash/task-dash.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-dash', pathMatch: 'full' },
  { path: 'task-dash', component: TaskDashComponent },
  { path: 'tasks-board', component: TasksBoardComponent },
  { path: 'detail/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
