import { cleanEmptyTags } from "./html";
describe("Html Module", () => {
  it("should clean the empty tags", () => {
    expect(cleanEmptyTags()).toBeTruthy;
  });
});
