import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFound } from 'common/app-specific-errors/not-found';
import { BadInput } from 'common/app-specific-errors/bad-input';
import { AppError } from 'common/app-specific-errors/app-error';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.baseUrl}?q=books&maxResults=40`).pipe(retry(3), catchError(this.errorHandler));
  }

  getSingle(keyWord) {
    return this.http.get(`${this.baseUrl}?q=${keyWord}&maxResults=40`).pipe(retry(3), catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFound(error));
    }
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    return throwError(new AppError(error));
  }
}
