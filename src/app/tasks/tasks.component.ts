import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  selectedTask: Task;

  isModalActive: boolean = false;

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks;
    console.log("Tasks: " + this.taskInfoService.getTasks());
    console.log("This Tasks: " + this.tasks); 
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  fetchTasks() {
    this.tasks = this.taskInfoService.getTasks();
  }
  
}
