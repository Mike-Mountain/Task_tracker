import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Snippet } from './snippet-template';

@Injectable({
  providedIn: 'root'
})
export class SnippetInfoService {

  constructor(private httpClient: HttpClient) { }

  private snippetUrl = 'http://localhost:1337/snippet';

  getSnippets(): Observable<Snippet[]> {
    return this.httpClient.get<Snippet[]>(this.snippetUrl)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  getSnippet(id: number) {
    const url = `${this.snippetUrl}/${id}`;
    return this.httpClient.get<Snippet>(url).pipe(
      catchError(this.handleError<Snippet>(`getHero id=${id}`))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
