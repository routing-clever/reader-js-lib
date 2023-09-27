import {
  pickNameFromSender,
  pickDomainFromEmail,
  pickEmailFromSender,
} from "./email";

describe("Email Module", () => {
  it("should pick the name from sender", () => {
    expect(pickNameFromSender("<reader> team@readzen.app")).toBe("reader");

    expect(pickNameFromSender("team@readzen.app")).toBe(null);
  });

  it("should pick the email from sender", () => {
    expect(pickEmailFromSender("<readzen> team@readzen.app")).toBe(
      "team@readzen.app"
    );

    expect(pickEmailFromSender("<readzen> readzen.app")).toBe(null);
  });

  it("should pick the domain from email", () => {
    expect(pickDomainFromEmail("team@readzen.app")).toBe("readzen.app");

    expect(pickDomainFromEmail("teamreadzen.app")).toBe(null);
  });
});
