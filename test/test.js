const Assert = require('assert')

const stringIsEmpty = require('../')

describe('stringIsEmpty', () => {
  it('should return true for empty', () => {
    Assert.ok(stringIsEmpty(''))
    Assert.ok(stringIsEmpty('    '))
    Assert.ok(stringIsEmpty(new String('')))
    Assert.ok(stringIsEmpty(new String(' ')))
  })
  it('should return false for !empty', () => {
    Assert.ok(!stringIsEmpty('notEmpty'))
    Assert.ok(!stringIsEmpty(' notEmpty '))
    Assert.ok(!stringIsEmpty(new String('noEmpty')))
    Assert.ok(!stringIsEmpty(new String(' notEmpty ')))
  })
  it('should return false for falsey WATmanesque gotchas', () => {
    Assert.ok(!stringIsEmpty(' 0 '))
    Assert.ok(!stringIsEmpty(' 00'))
    Assert.ok(!stringIsEmpty('000 '))
    Assert.ok(!stringIsEmpty(new String(' 0 ')))
  })
  it('should return true for whitespace-related WATmanesque gotchas', () => {
    Assert.ok(stringIsEmpty(' \n '))
    Assert.ok(stringIsEmpty('\n'))
    Assert.ok(stringIsEmpty(new String(`
    
    `)))
    Assert.ok(stringIsEmpty(new String(' \t\t\t ')))
  })
  it('should return false for non-string', () => {
    Assert.ok(!stringIsEmpty({}))
    Assert.ok(!stringIsEmpty([]))
    Assert.ok(!stringIsEmpty(new Date()))
    Assert.ok(!stringIsEmpty(new RegExp()))
  })
})
