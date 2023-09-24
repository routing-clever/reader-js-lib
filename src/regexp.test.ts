import { isURL, isEmail } from "./regexp";

describe("regexp module", () => {
  it("should be a email", () => {
    expect(isEmail("123@example.com")).toBeTruthy();
  });

  it("should be an URL", () => {
    expect(isURL("http://example.com")).toBeTruthy();
  });
});
