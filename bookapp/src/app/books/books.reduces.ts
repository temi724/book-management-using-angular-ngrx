import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.action';
import { Book } from '../models/books';

export const initializeState: ReadonlyArray<Book> = [];
export const bookReducer = createReducer(
  initializeState,
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ])
);
