import { isURL, isEmail } from "./regexp";
import { describe, it, expect } from 'vitest'

describe('regexp module', () => {
  it('should be a email', () => {
    expect(isEmail('123@example.com')).toBeTruthy()
  })

  it('should be an URL', () => {
    // right
    expect(isURL('http://example.com')).toBeTruthy()
    expect(isURL('https://example.com')).toBeTruthy()
    expect(isURL('https://www.example.com')).toBeTruthy()
    expect(isURL('https://img.example.com')).toBeTruthy()
    expect(isURL('example.com')).toBeTruthy()
    expect(isURL('www.example.com')).toBeTruthy()
    expect(isURL('img.example.com')).toBeTruthy()
    expect(isURL('https://aisuper.tools/')).toBeTruthy()

    // wrong
    expect(isURL('ps://example.com')).toBeFalsy()
    expect(isURL('ftp://example.com')).toBeFalsy()
    expect(isURL('ws://example.com')).toBeFalsy()
    expect(isURL('://example.com')).toBeFalsy()
    expect(isURL('//example.com')).toBeFalsy()
  })

  it('should return false for invalid URL with spaces', () => {
    expect(isURL('johnreillymurray@gmail.com (John Murray)')).toBeFalsy()
  })

  it('should return false for normal string', () => {
    expect(isURL('SHirinnn')).toBeFalsy()
    expect(isURL('')).toBeFalsy()
    expect(isURL('//.app')).toBeFalsy()
  })
})
