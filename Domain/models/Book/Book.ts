import { Entity } from '@Entity';
import { Title } from '@models/Book/Title';
import { Author } from '@models/Book/Author';
import { Price } from '@models/Book/Price';
import { PublishDate } from '@models/Book/PublishDate';
import { Tag } from '@models/Book/Tag';
import { IBookRepository } from '@models/Book/IBookRepository';

class Book extends Entity {
  private _title: Title;
  private _author: Author;
  private _price: Price;
  private _publishDate?: PublishDate;
  private _tags?: Tag[];

  constructor(id: string, title: Title, author: Author, price: Price, publishDate?: PublishDate, tags?: Tag[]) {
    super(id);
    this._title = title;
    this._author = author;
    this._price = price;
    this._publishDate = publishDate;
    this._tags = tags;
  }

  static async registerBook(
    bookRepository: IBookRepository,
    id: string,
    title: Title,
    author: Author,
    price: Price,
    publishDate?: PublishDate,
    tags?: Tag[]
  ): Promise<void> {
    const book = new Book(id, title, author, price, publishDate, tags);
    await bookRepository.save(book);
  }

  get title(): Title {
    return this._title;
  }

  get author(): Author {
    return this._author;
  }

  get price(): Price {
    return this._price;
  }

  get publishDate(): PublishDate | undefined {
    return this._publishDate;
  }

  get tags(): Tag[] | undefined {
    return this._tags;
  }

  updateTitle(title: Title): void {
    this._title = title;
  }

  updateAuthor(author: Author): void {
    this._author = author;
  }

  updatePrice(price: Price): void {
    this._price = price;
  }

  updatePublishDate(PublishDate?: PublishDate): void {
    this._publishDate = PublishDate;
  }

  updateTags(tags?: Tag[]): void {
    this._tags = tags;
  }
}

export { Book };

