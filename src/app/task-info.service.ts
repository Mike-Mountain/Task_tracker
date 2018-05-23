import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task-template';
import { TASKS } from './mock-tasks';
import { ReturnMessageService } from './return-message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  constructor(private returnMessageService: ReturnMessageService) { }

  getTasks(): Observable<Task[]> {
    // TODO: send the message _after_ fetching the hearoes
    this.returnMessageService.add('TaskService: Fetched Tasks');
    return of(TASKS);
  } 
}
