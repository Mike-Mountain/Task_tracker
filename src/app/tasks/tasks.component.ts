import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

}
