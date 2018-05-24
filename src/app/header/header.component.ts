import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';
  subtitle = 'A way to track your time';

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
