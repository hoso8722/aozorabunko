import { ValueObject } from '@ValueObject';

class Tag extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (Tag.isValid(value) === false) {
      throw new Error('Invalid tag');
    }
  }

  static isValid(value: string): boolean {
    return typeof value === 'string' && value.length > 0 && value.length <= 255;
  }
}

export { Tag };

