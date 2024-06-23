import { ValueObject } from '@ValueObject';

class LastPage extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  protected validate(value: number): void {
    if (LastPage.isValid(value) === false) {
      throw new Error('Invalid last page');
    }
  }

  static isValid(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}

export { LastPage };

