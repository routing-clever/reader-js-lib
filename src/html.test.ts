import { describe, it, expect } from 'vitest'
import { cleanEmptyTags } from './html'
describe('Html Module', () => {
  it('should clean the empty tags', () => {
    expect(cleanEmptyTags()).toBeTruthy
  })
})
