import { describe, it, expect } from "@jest/globals";
import { countWord } from "./string";

describe("string module", () => {
  it("should count Chinese words", () => {
    expect(countWord("你好")).toBe(2);
  });

  it("should count English words", () => {
    expect(
      countWord(
        "Eiusmod eu consequat et exercitation incididunt et proident officia nostrud eiusmod cillum."
      )
    ).toBe(12);
  });

  it("should count Chinese and English words", () => {
    expect(
      countWord(
        "Context+《英语自学手册》联名众筹于8月21日至9月4日之间开展，分「天使版」和「普通版」两种规格"
      )
    ).toBe(40);
  });
});
