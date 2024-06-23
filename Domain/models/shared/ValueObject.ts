abstract class ValueObject<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.constructor.name !== this.constructor.name) {
      return false;
    }
    return this._value === vo.value;
  }

  protected abstract validate(value: T): void;
}

export { ValueObject };

