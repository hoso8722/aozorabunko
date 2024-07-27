import { PrismaClient } from '@prisma/client';
import { IBookRepository } from '@models/Book/IBookRepository';
import { Book } from '@models/Book/Book';
import { BookId } from '@models/Book/BookId'
import { Title } from '@models/Book/Title';
import { Author } from '@models/Book/Author';
import { Price } from '@models/Book/Price';
import { PublishDate } from '@models/Book/PublishDate';
import { Tag } from '@models/Book/Tag'
class PrismaBookRepository implements IBookRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(book: Book): Promise<void> {
    await this.prisma.book.create({
      data: {
        bookId: book.id,
        title: book.title.value,
        author: book.author.value,
        price: book.price.value,
        publishDate: book.publishDate ? book.publishDate.value.toISOString() : new Date().toISOString(),
        // tags: book.tags ? book.tags.values.toString : new Array().values,
        tags: book.tags?.values.arguments
      },
    });
  }

  async findById(bookId: string): Promise<Book | null> {
    const book = await this.prisma.book.findUnique({
      where: { bookId },
    });

    if (!book) return null;

    return null;
  }
}

export { PrismaBookRepository };
