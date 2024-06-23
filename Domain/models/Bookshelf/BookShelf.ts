import { Entity } from '@Entity';
import { UserId } from '@models/Bookshelf/UserId';
import { BookId } from '@models/Bookshelf/BookId';

class BookShelf extends Entity {
  private _userId: UserId;
  private _bookIds: Set<BookId>;

  constructor(id: string, userId: UserId, bookIds: BookId[] = []) {
    super(id);
    this._userId = userId;
    this._bookIds = new Set(bookIds);
  }

  get userId(): UserId {
    return this._userId;
  }

  get bookIds(): BookId[] {
    return Array.from(this._bookIds);
  }

  addBook(bookId: BookId): void {
    this._bookIds.add(bookId);
  }

  removeBook(bookId: BookId): void {
    this._bookIds.delete(bookId);
  }

  containsBook(bookId: BookId): boolean {
    return this._bookIds.has(bookId);
  }
}

export { BookShelf };

