import { ValueObject } from '@ValueObject';

class PublishDate extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
    this.validate(value);
  }

  protected validate(value: Date): void {
    if (PublishDate.isValid(value) === false) {
      throw new Error('Invalid Publish date');
    }
  }

  static isValid(value: Date): boolean {
    return value instanceof Date && value < new Date();
  }
}

export { PublishDate };

