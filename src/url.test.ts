import { extractDomain, removeProtocol } from "./url";

describe("url module", () => {
  it("should remove the protocol of the URL", () => {
    expect(removeProtocol("http://example.com/")).toBe("example.com");
  });

  it("should get the domain of an URL", () => {
    expect(extractDomain('https://www.readzen.app')).toBe(
      'https://www.readzen.app'
    )
    expect(extractDomain('http://www.readzen.app')).toBe(
      'http://www.readzen.app'
    )
    expect(extractDomain('www.readzen.app')).toBe('https://www.readzen.app')
    expect(extractDomain('img.readzen.app')).toBe('https://img.readzen.app')
    expect(extractDomain("file://www.readzen.app")).toBe(null);
  });
});
