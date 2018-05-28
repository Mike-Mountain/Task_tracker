import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
  }

  add(Title: string, Priority: number, Description: string, Category: string, DueDate: string, Comments: string) {
    Title = Title.trim();
    if (!Title) {return;}
    this.taskInfoService.addTask({Title, Priority, Description, Category, DueDate, Comments} as Task)
      .subscribe(task => {
        this.tasks.push(task);
      })
  }

}
