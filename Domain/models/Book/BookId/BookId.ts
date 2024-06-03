import { ValueObject } from "../../shared/ValueObject";
import { uuidv7 as uuid7 } from "uuidv7";

type BookIdValue = string

export class BookId extends ValueObject<BookIdValue, 'BookId'> {
  // static uuid: string = uuidv7();
  static readonly RegExp = /^[0-9a-zA-Z]{8}-([0-9a-zA-Z]{4}-){3}[0-9a-zA-Z]{12}$/
  constructor(uuid = uuid7()) {
    super(uuid)
  }

  protected validate(value: BookIdValue): void {
    if (BookId.RegExp.test(value) === false) {
      throw new Error(
        `uuidの値が不正です>>>${value}`
      )
    }
  }
}