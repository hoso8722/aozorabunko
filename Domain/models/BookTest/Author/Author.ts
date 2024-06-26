import { ValueObject } from "Domain/models/shared/ValueObject~"
type AuthorValue = string

export class Author extends ValueObject<AuthorValue, 'Title'> {

  static readonly MAX_LENGTH = 50
  static readonly MIN_LENGTH = 1

  constructor(value: AuthorValue) {
    super(value)
  }

  protected validate(value: AuthorValue): void {
    if (value.length < Author.MIN_LENGTH || value.length > Author.MAX_LENGTH) {
      throw new Error(
        `著者名は${Author.MIN_LENGTH}文字以上、${Author.MAX_LENGTH}文字以下でなければなりません。`
      )
    }
  }
}