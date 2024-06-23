import { ValueObject } from '@ValueObject';

class Title extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (Title.isValid(value) === false) {
      throw new Error('Invalid title');
    }
  }

  static isValid(value: string): boolean {
    return typeof value === 'string' && value.length > 0 && value.length <= 255;
  }
}

export { Title };

