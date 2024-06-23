import { ValueObject } from '@ValueObject';

class UserId extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (UserId.isValid(value) === false) {
      throw new Error('Invalid user ID');
    }
  }

  static isValid(value: string): boolean {
    return typeof value === 'string' && value.length > 0 && value.length <= 255;
  }
}

export { UserId };

