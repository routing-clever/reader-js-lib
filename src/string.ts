/**
 * 统计字数
 * @param text string
 * @returns number
 */
export function countWord(text: string) {
  const r1 = new RegExp("[\u3000-\u4DFF]", "g");
  const r2 = new RegExp("[\u4E00-\u9FFF]", "g");
  const r3 = new RegExp("[\u0E00-\u0E7F]", "g");
  text = text.replace(r1, " {PNK} ");
  text = text.replace(r2, " {CJK} ");
  text = text.replace(r3, " {THI} ");
  //text = text.replace(/(<([^>]+)>)/ig,”") ;
  text = text.replace(/(\(|\)|\*|\||\+|”|’|_|;|:|,|\.|\?)/gi, " ");
  text = text.replace(/\s+/gi, " ");
  //text = text.replace(/_+/ig," ");
  const a = text.split(/[\s+|\\|\/]/g);
  let count = 0;
  let pnkCounter = 0;
  let thiCounter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "{PNK}") {
      pnkCounter++;
    } else if (a[i] == "{THI}") {
      thiCounter++;
    } else if (a[i].length > 0) {
      count++;
    }
  }
  count += Math.ceil(pnkCounter / 3) + Math.ceil(thiCounter / 4);
  return count;
}

export const trim = (str?: string) => {
    if (!str) return str

    return str.replace(/^\u200c+|\u200c+$/g, '').trim()
}

/**
 * Trim last char of a string
 */
export function trimEnd(str: string, trimChar: string) {
    if (str.endsWith(trimChar)) {
        return str.slice(0, -1)
    }
    return str
}
