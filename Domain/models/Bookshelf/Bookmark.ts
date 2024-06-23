import { ValueObject } from '@ValueObject';

class Bookmark extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  protected validate(value: number): void {
    if (Bookmark.isValid(value) === false) {
      throw new Error('Invalid bookmark');
    }
  }

  static isValid(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}

export { Bookmark };

