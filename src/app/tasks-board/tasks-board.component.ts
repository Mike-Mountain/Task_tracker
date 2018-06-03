import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  tasks: Task[] = [];

  taskToDo: Task[] = [];
  taskInProgress: Task[] = [];
  taskComplete: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.setTaskStatus(tasks)); //TODO: Add parameter to look for tasks in state "to do".
  }

  setTaskStatus(tasks) {
    this.tasks = tasks;
    console.log('Before the for!')
    console.log(this.tasks)
    for (let task of this.tasks) {
      console.log('In the for');

      switch(task.progress) {
        case 'To Do':
            this.taskToDo.push(task);
            break;
        case 'In Progress':
            this.taskInProgress.push(task);
            break;
        case 'Complete':
            this.taskComplete.push(task);
            break;
        default:
            break;       
    } 

      // if (task.progress === 'To Do') {
      //   this.taskToDo = task;
      //   console.log('taskToDo = ');
      //   console.log(this.taskToDo);

      // } else if (task.progress === 'In Progress') {
      //   this.taskInProgress = task;
      //   console.log('taskInProgress = ');
      //   console.log(this.taskInProgress);

      // } else if (task.progress === 'Complete') {
      //   this.taskComplete = task;
      //   console.log('taskComplete = ');
      //   console.log(this.taskComplete);

      // } else {
      //   console.log("There are no tasks to display");
      // }
    }
    console.log('taskToDo');
    console.log(this.taskToDo);
    console.log('taskInProgress');
    console.log(this.taskInProgress);
    console.log('taskComplete');
    console.log(this.taskComplete);
  }
}
