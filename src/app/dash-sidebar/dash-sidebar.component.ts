import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';


@Component({
  selector: 'app-dash-sidebar',
  templateUrl: './dash-sidebar.component.html',
  styleUrls: ['./dash-sidebar.component.scss']
})
export class DashSidebarComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
