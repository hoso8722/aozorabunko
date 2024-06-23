import { ValueObject } from '@ValueObject';

class Email extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (Email.isValid(value) === false) {
      throw new Error('Invalid email');
    }
  }

  static isValid(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof value === 'string' && value.length <= 255 && emailRegex.test(value);
  }
}

export { Email };

