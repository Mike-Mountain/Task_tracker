import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-task-dash',
  templateUrl: './task-dash.component.html',
  styleUrls: ['./task-dash.component.scss']
})
export class TaskDashComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(0,5)); //TODO: Remove slice and add parameter to look for tasks in state "to do".
  }

}
