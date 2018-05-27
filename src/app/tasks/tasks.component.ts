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
    this.fetchTasks();
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
  
  add(name: string) {
    name = name.trim();
    if (!name) {return;}
    this.taskInfoService.addTask({name} as Task)
      .subscribe(task => {
        this.tasks.push(task);
      })
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskInfoService.deleteTask(task).subscribe;
  } 
  
}
