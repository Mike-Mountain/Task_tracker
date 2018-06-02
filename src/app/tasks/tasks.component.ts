import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  selectedTask: Task;

  isModalActive: boolean = false;

  descBox = document.getElementById("descBox");

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
    console.log('this.tasks= ');
    console.log(this.tasks);
  }

  onSelect(task: Task) {
    if (this.selectedTask === null || this.selectedTask === undefined) {
      this.selectedTask = task;
    } else {
      this.selectedTask = null;
    }
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  readMore() {
    this.descBox.style.display = "none";
    if (this.descBox.style.display === "none") {
      this.descBox.style.display = "block";
    } else {
      this.descBox.style.display = "none";
    }
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskInfoService.deleteTask(task).subscribe();
  } 

}
