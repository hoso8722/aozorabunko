import { ValueObject } from '@ValueObject';

class Price extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  protected validate(value: number): void {
    if (Price.isValid(value) === false) {
      throw new Error('Invalid price');
    }
  }

  static isValid(value: number): boolean {
    return typeof value === 'number' && value >= 0 && value <= 1000000;
  }
}

export { Price };

