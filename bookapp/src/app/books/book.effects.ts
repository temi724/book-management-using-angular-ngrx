import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BookActions from './book.action';
import { BookService } from './book.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BookEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      //call action
      ofType(BookActions.AddBook),
      //allowing multiple actions
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          //on sucess
          map((book) => BookActions.AddBookSuccess(book)),
          //error
          catchError((error) => of(BookActions.AddBookFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private bookService: BookService) {}
}
