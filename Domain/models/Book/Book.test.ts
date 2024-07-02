import { Book } from '@models/Book/Book';
import { Title } from '@models/Book/Title';
import { Author } from '@models/Book/Author';
import { Price } from '@models/Book/Price';
import { PublishDate } from '@models/Book/PublishDate';
import { Tag } from '@models/Book/Tag'; // タグクラスを追加します。
import { IBookRepository } from '@models/Book/IBookRepository';
import { describe, it, expect, jest } from "@jest/globals";

class MockBookRepository implements IBookRepository {
  public save = jest.fn();
  public findById = jest.fn();
}

describe('Book', () => {
  describe('registerBook', () => {
    it('should save a book with valid data', async () => {
      const mockBookRepository = new MockBookRepository();
      const bookId = '1';
      const title = new Title('Sample Book Title');
      const author = new Author('Sample Author');
      const price = new Price(1500);
      const publishDate = new PublishDate(new Date('2023-01-01'));
      const tags = [new Tag('Tag1'), new Tag('Tag2')]; // タグを追加します。

      await Book.registerBook(
        mockBookRepository,
        title,
        author,
        price,
        publishDate,
        tags
      );

      expect(mockBookRepository.save).toHaveBeenCalledTimes(1);
      expect(mockBookRepository.save).toHaveBeenCalledWith(expect.any(Book));
      const savedBook = mockBookRepository.save.mock.calls[0][0];
      expect(savedBook.title.value).toBe('Sample Book Title');
      expect(savedBook.author.value).toBe('Sample Author');
      expect(savedBook.price.value).toBe(1500);
      expect(savedBook.publishDate?.value.toISOString()).toBe('2023-01-01T00:00:00.000Z');
      expect(savedBook.tags?.map((tag: { value: any; }) => tag.value)).toEqual(['Tag1', 'Tag2']);
    });
  });
});
