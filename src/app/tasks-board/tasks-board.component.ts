import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(1,5));
  }


}
