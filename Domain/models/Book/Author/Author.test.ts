import { describe, it, expect } from "@jest/globals";
import { Author } from "./Author";

describe('Author', () => {
  // 正常系
  it('1文字以上５０文字以内は正常', () => {
    const name = '夏目漱石';
    expect(new Author(name).value).toBe('夏目漱石');
  });

  // 異常系
  it('空文字の場合はエラーを投げる', () => {
    const name = '';
    expect(() => new Author(name)).toThrow(`著者名は${Author.MIN_LENGTH}文字以上、${Author.MAX_LENGTH}文字以下でなければなりません。`);
  });

  it('５１文字以上の場合はエラーを投げる', () => {
    const name = 'あ'.repeat(51)
    expect(() => new Author(name)).toThrow(`著者名は${Author.MIN_LENGTH}文字以上、${Author.MAX_LENGTH}文字以下でなければなりません。`);
  });
});