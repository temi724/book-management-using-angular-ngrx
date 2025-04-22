import { Book } from './models/books';
export interface AppStateTs {
  readonly book: Book[];
}
