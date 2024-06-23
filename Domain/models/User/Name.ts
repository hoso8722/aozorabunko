import { ValueObject } from '@ValueObject';

class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (Name.isValid(value) === false) {
      throw new Error('Invalid name');
    }
  }

  static isValid(value: string): boolean {
    return typeof value === 'string' && value.length > 0 && value.length <= 255;
  }
}

export { Name };

