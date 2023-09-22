export function isEmail(str?: string): boolean {
  if (!str) return false;
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(str);
}

export function isURL(str?: string): boolean {
  if (!str) return false;
  return /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
    str
  );
}
