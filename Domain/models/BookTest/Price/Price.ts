import { ValueObject } from "../../shared/ValueObject~";

type PriceValue = {
  amount: number;
  currency: 'JPY'
}

export class Price extends ValueObject<PriceValue, 'Price'> {
  static readonly MAX = 1000000
  static readonly MIN = 0

  constructor(value: PriceValue) {
    super(value);
  }

  protected validate(value: PriceValue): void {
    if (value.currency !== 'JPY') {
      throw new Error('現在は日本円のみを扱います')
    }

    if (value.amount < Price.MIN || Price.MAX < value.amount) {
      throw new Error(`価格は${Price.MIN}円から${Price.MAX}円の間でなければいけません`)
    }
  }

  get amount(): PriceValue["amount"] {
    return this.value.amount
  }

  get currency(): PriceValue['currency'] {
    return this.value.currency
  }
}