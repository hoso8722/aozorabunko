import { describe, it, expect } from "@jest/globals";
import { BookId } from "./BookId";
import { uuidv7 as uuid7 } from "uuidv7";

describe('BookId', () => {
  // 正常系
  it('正しいuuidを作成する', () => {
    const uuid = uuid7()
    // console.log(uuid)
    const Book = new BookId(uuid)
    expect(Book.value).toBe(uuid)
  })
  // 異常系
  it('記号が入ったuuidはエラーを投げる', () => {
    const unvalid_uuid = "!189f7ea-ae2c-7809-8aeb-b819cf5e9e7f"
    expect(() => {
      new BookId(unvalid_uuid)
    }).toThrow(`uuidの値が不正です>>>${unvalid_uuid}`)
  })
  it('文字数が合わないuuidはエラーを投げる', () => {
    const unvalid_uuid = "S2189f7ea-ae2c-7809-8aeb-b819cf5e9e7f"
    expect(() => {
      new BookId(unvalid_uuid)
    }).toThrow(`uuidの値が不正です>>>${unvalid_uuid}`)
  })
})