import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksBoardComponent } from './tasks-board/tasks-board.component';

const routes: Routes = [
  { path: 'tasks-board', component: TasksBoardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
