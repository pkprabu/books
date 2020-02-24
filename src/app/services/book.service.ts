import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}?q=books&maxResults=40`);
  }

  getSingle(keyWord) {
    return this.http.get(`${this.baseUrl}?q=${keyWord}&maxResults=40`);
  }
}
