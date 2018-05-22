import { Injectable } from '@angular/core';

import { Task } from './task-template';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  } 
}
