import { ValueObject } from '../../shared/ValueObject';

class Password extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (Password.isValid(value) === false) {
      throw new Error('Invalid password');
    }
  }

  static isValid(value: string): boolean {
    const lengthValid = value.length >= 8 && value.length <= 24;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasDigit = /[0-9]/.test(value);
    return lengthValid && hasLetter && hasDigit;
  }
}

export { Password };

