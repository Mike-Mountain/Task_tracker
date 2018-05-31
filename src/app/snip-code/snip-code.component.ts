import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { Snippet } from '../snippet-template';
import { SnippetInfoService } from '../snippet-info.service';

@Component({
  selector: 'app-snip-code',
  templateUrl: './snip-code.component.html',
  styleUrls: ['./snip-code.component.scss']
})
export class SnipCodeComponent implements OnInit {

  snippets: Snippet[];

  selectedSnippet: Snippet;

  constructor(private snippetInfoService: SnippetInfoService) { }

  ngOnInit() {
    this.fetchSnippets();
  }

  fetchSnippets() {
    this.snippetInfoService.getSnippets()
      .subscribe(snippets => this.snippets = snippets);
  }

  onSelect(snippet: Snippet) {
    console.log("selectedSnippet = " + this.selectedSnippet);
    if(this.selectedSnippet === null) {
      this.selectedSnippet = snippet;
    } else {
      this.selectedSnippet = null;
    }
  }

}