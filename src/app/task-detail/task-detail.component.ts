import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

import { Task } from '../task-template'; 
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskInfoService: TaskInfoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.fetchTask();
  }

  fetchTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskInfoService.getTaskDetail(id)
      .subscribe(task => this.task = task)
  }

  goBack() {
    this.location.back();
  }

}
