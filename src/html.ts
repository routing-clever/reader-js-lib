export function cleanEmptyTags(html: string): string {
  return html.replace(
    /<(\w+)\b(?:\s+[\w\-:]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[\w\-:]+))?)*\s*\/?>\s*<\/\1>/g,
    '',
  )
}
