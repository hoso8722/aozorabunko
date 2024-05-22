import { ValueObject } from "../../shared/ValueObject";
import { isExists } from "date-fns";

type PublishedDate = string

export class Published extends ValueObject<PublishedDate, 'Published'> {
  //static  = new RegExp('^[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$')
  static readonly FIXED_LENGTH = 10
  static readonly REGEXP = /^[0-9]{4}\/([0-9]{2})\/([0-9]{2})$/
  constructor(value: PublishedDate) {
    super(value);
  }

  protected validate(value: PublishedDate): void {
    if (Published.FIXED_LENGTH !== value.length) {
      throw new Error(
        `文字数は${Published.FIXED_LENGTH}文字でなければならない`
      )
    }
    if (!Published.REGEXP.test(value)) {
      throw new Error(
        `日付は[YYYY/MM/DD]のフォーマットに一致なければならない`
      )
    }

    const splitDate = value.split('/').map(Number)
    const ExistedDate = isExists(splitDate[0], splitDate[1], splitDate[2])
    if (!ExistedDate) {
      throw new Error(
        `不正な日付です`
      )
    }
  }
}