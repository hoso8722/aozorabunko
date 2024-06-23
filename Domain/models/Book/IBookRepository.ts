// src/application/interfaces/IBookRepository.ts
import { Book } from '@models/Book/Book';

interface IBookRepository {
  save(book: Book): Promise<void>;
  findById(id: string): Promise<Book | null>;
}

export type { IBookRepository };
