import { describe, it, expect } from 'vitest'
import { cleanEmptyTags } from './html'

describe('Html Module', () => {
  it('should clean the empty tags', () => {
    const input = '<div><p></p></div>'
    const expectedOutput = '<div></div>'
    expect(cleanEmptyTags(input)).toBe(expectedOutput)
  })

  it('should not remove non-empty tags', () => {
    const input = '<div><p>Hello</p></div>'
    const expectedOutput = '<div><p>Hello</p></div>'
    expect(cleanEmptyTags(input)).toBe(expectedOutput)
  })

  it('should handle multiple empty tags', () => {
    const input = '<div><p></p><span></span></div>'
    const expectedOutput = '<div></div>'
    expect(cleanEmptyTags(input)).toBe(expectedOutput)
  })
})