export const removeProtocolFromUrl = (url: string) => {
  url = url.replace(/(^\w+:|^)\/\//, '')
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }
  return url
}
