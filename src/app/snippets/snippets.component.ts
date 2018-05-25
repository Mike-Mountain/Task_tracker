import { Component, OnInit } from '@angular/core';

import { Snippet } from '../snippet-template';
import { SnippetInfoService } from '../snippet-info.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit {

  snippets: Snippet[];

  constructor(private snippetInfoService: SnippetInfoService,) { }

  ngOnInit() {
    this.fetchSnippets();
  }

  fetchSnippets() {
    this.snippets = this.snippetInfoService.getSnippets();
  }

}
