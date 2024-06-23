import { ValueObject } from '@ValueObject';

class PhoneNumber extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  protected validate(value: string): void {
    if (PhoneNumber.isValid(value) === false) {
      throw new Error('Invalid phone number');
    }
  }

  static isValid(value: string): boolean {
    // シンプルな電話番号のバリデーション例
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return typeof value === 'string' && phoneRegex.test(value);
  }
}

export { PhoneNumber };

