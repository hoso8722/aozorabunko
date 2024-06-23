import { PrismaClient } from '@prisma/client';
import { IBookRepository } from '@models/Book/IBookRepository';
import { Book } from '@models/Book/Book';
import { Title } from '@models/Book/Title';
import { Author } from '@models/Book/Author';
import { Price } from '@models/Book/Price';
import { PublishDate } from '@models/Book/PublishDate';

class PrismaBookRepository implements IBookRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(book: Book): Promise<void> {
    await this.prisma.book.create({
      data: {
        id: book.id,
        title: book.title.value,
        author: book.author.value,
        price: book.price.value,
        publishDate: book.publishDate ? book.publishDate.value : null,
      },
    });
  }

  async findById(id: string): Promise<Book | null> {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) return null;

    return new Book(
      book.id,
      new Title(book.title),
      new Author(book.author),
      new Price(book.price),
      book.publishDate ? new PublishDate(book.publishDate) : undefined
    );
  }
}

export { PrismaBookRepository };
