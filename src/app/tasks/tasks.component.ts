import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  task: Task = {
    id: 1,
    name: 'TaskTracker',
    summary: 'Build TaskTracker'
  }

  constructor() { }

  ngOnInit() {
  }

}
