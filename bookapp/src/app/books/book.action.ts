import { createAction, props } from '@ngrx/store';
import { Book } from '../models/books';

export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction(
  '[Book] Add Book Success',
  props<Book>()
);
export const AddBookFailure = createAction(
  '[Book] Add Book Failure',
  props<{ error: any }>()
);
export const RemoveBook = createAction(
  '[Book] Remove Book',
  props<{ id: string }>()
);
