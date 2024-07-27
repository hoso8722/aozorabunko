import { IBookRepository } from "@/Domain/models/Book/IBookRepository";

export default class BookService {
  constructor(private bookRepository: IBookRepository) { }

}