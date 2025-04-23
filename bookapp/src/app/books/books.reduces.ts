import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookSuccess,
  AddBookFailure,
} from './book.action';
import { Book } from '../models/books';

export const initializeState: Book[] = [];
export const bookReducer = createReducer(
  initializeState,
  on(AddBook, (state) => {
    return state;
  }),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error('Error adding book:', error);
    return state;
  }),
  on(RemoveBook, (state, { id }) => state.filter((book) => book.id !== id))
);
