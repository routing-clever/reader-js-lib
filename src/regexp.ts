export function isEmail(str?: string): boolean {
  if (!str) return false
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(str)
}

export function isURL(str?: string): boolean {
  if (!str) return false

  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol (optional)
      '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+' + // subdomain + domain name
      '[a-z]{2,}' + // top-level domain
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$' + // fragment locator
      '(?!.*\\s)', // no spaces allowed
    'i'
  )
  return !!pattern.test(str)
}