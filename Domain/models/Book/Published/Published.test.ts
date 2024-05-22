import { describe, it, expect } from "@jest/globals";
import { Published } from "./Published"

describe('Published', () => {
  //正常系
  it('正しい日付を作成する', () => {
    const validDate = '1999/03/24'
    const publishedDate = new Published(validDate)
    expect(publishedDate.value).toBe(validDate)
  })

  //異常系
  it('１０文字以外ならエラーを投げる', () => {
    const invalidDate = "15949/3339/3"
    expect(() => {
      new Published(invalidDate)
    }).toThrow(`文字数は${Published.FIXED_LENGTH}文字でなければならない`)
  })

  it('日付のフォーマットが一致しない場合はエラーを投げる', () => {
    const invalidDate = "12/23/2024"
    expect(() => {
      new Published(invalidDate)
    }).toThrow(`日付は[YYYY/MM/DD]のフォーマットに一致なければならない`)
  })

  it('不正な日付の場合はエラーを投げる', () => {
    const invalidDate = "1912/12/66"
    expect(() => {
      new Published(invalidDate)
    }).toThrow(`不正な日付です`)
  })
})
