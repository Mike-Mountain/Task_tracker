import { Component, OnInit } from '@angular/core';

import { ReturnMessageService } from '../return-message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public returnMessageService: ReturnMessageService) { }

  ngOnInit() {
  }

}
