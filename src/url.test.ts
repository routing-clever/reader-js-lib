import { removeProtocolFromUrl } from "./url";

describe("url module", () => {
  it("should remove the protocol of the URL", () => {
    expect(removeProtocolFromUrl("http://example.com/")).toBe("example.com");
  });
});
