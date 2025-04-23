import { Injectable } from '@angular/core';
import { Book } from '../models/books';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  addBook(book: Book): Observable<Book> {
    // Simulate a successful API call
    return of(book);
  }
  removeBook(id: string): Observable<string> {
    // Simulate a successful API call
    return of(id);
  }
}
