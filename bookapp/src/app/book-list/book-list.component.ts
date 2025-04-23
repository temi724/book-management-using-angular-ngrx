import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/books';
import { AddBook, RemoveBook } from '../books/book.action';
import { AppStateTs } from '../app.state';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppStateTs>) {
    this.books$ = this.store.pipe(select('book'));
  }
  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  removeBook(id: string) {
    this.store.dispatch(RemoveBook({ id }));
  }
}
