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
    console.log("onSelect(sidx): " + sidx);
    // if(this.selectedSnippet === null) {
      this.selectedSnippet = this.snippets[sidx].snippet;
      console.log("Snippets = ");
      console.log(this.selectedSnippet);
    // } else {
    //   this.selectedSnippet = null;
    // }
  }

  fetchSnippets() {
    this.snippetInfoService.getSnippets()
      .subscribe(snippets => this.snippets = snippets);
  }

}
