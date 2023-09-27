import { isURL } from "./regexp";

export const removeProtocol = (url: string) => {
  url = url.replace(/(^\w+:|^)\/\//, "");
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }
  return url;
};

export const extractDomain = (url: string) => {
  if (!isURL(url)) return null;

  if (url.startsWith("//")) {
    url = "https:" + url;
  }

  try {
    const parsedURL = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsedURL.origin;
  } catch {
    return undefined;
  }
};
