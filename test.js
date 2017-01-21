'use strict'

const assert = require('assert')
const maybeStringify = require('.')

describe('maybeStringify', function () {
  it('should properly convert a string to JSON', function () {
    assert.strictEqual(maybeStringify('test'), JSON.stringify('test'))
  })

  it('should properly convert a number to JSON', function () {
    assert.strictEqual(maybeStringify(123), JSON.stringify(123))
  })

  it('should properly convert an array to JSON', function () {
    const array = [1, 2, 3, 'test']
    assert.strictEqual(maybeStringify(array), JSON.stringify(array))
  })

  it('should properly convert an object to JSON', function () {
    const obj = {test: 123}
    assert.strictEqual(maybeStringify(obj), JSON.stringify(obj))
  })

  it('should handle objects with recursive references', function () {
    const obj = {}
    obj.recursive = obj
    maybeStringify(obj)
  })

  it('should return a non-stringifiable value as-is', function () {
    function f () {}
    assert.strictEqual(maybeStringify(f), f)
  })

  it('should allow a custom fallback for a non-stringifiable value', function () {
    assert.strictEqual(maybeStringify(() => {}, {fallback: 'fallback'}), 'fallback')
  })

  it('should allow safe stringification to be disabled', function () {
    const obj = {}
    obj.recursive = obj
    assert.strictEqual(maybeStringify(obj, {fallback: 'fallback', safe: false}), 'fallback')
  })
})
