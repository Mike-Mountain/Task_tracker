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

  selectedSnippet: string;

  constructor(private snippetInfoService: SnippetInfoService,) { }

  ngOnInit() {
    this.fetchSnippets();
  }

  onSelect(sidx) {
    console.log("selectedSnippet = " + this.selectedSnippet);
    // if(this.selectedSnippet === null) {
      this.selectedSnippet = this.snippets[sidx].snippet;
    // } else {
    //   this.selectedSnippet = null;
    // }
  }

  fetchSnippets() {
    this.snippets = this.snippetInfoService.getSnippets();
  }

}
