import { Injectable } from '@angular/core';

import { Snippet } from './snippet-template';
import { SNIPPETS } from './mock-snippets';

@Injectable({
  providedIn: 'root'
})
export class SnippetInfoService {

  constructor() { }

  getSnippets(): Snippet[] {
    return SNIPPETS;
  }
}
