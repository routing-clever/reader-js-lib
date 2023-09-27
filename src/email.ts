export const pickNameFromSender = (sender: string) => {
  const regex = /<([^>]+)>/;
  const match = sender.match(regex);

  return match ? match[1] : null;
};

export const pickEmailFromSender = (sender: string) => {
  const matches = sender.match(/[\w\.-]+@[\w\.-]+/);
  return matches ? matches[0] : null;
};

export const pickDomainFromEmail = (email: string) => {
  const regex = /@(.+)/;
  const match = email.match(regex);
  if (!match) return null;

  const domain = match[1].split(".").slice(-2).join(".");
  return domain;
};
