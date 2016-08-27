'use strict'
const assert = require('assert')
const toggleMember = require('./index')

const setWithFoo = new Set(['foo', 'bar', 'baz'])
const setWithoutFoo = new Set(['bar', 'baz'])

const setToSortedArr = set => {
  const arr = Array.from(set)
  arr.sort()
  return arr
}

const shouldDeepEq = (actualSet, expectedSet, message) => {
  const actual = setToSortedArr(actualSet)
  const expected = setToSortedArr(expectedSet)
  assert.deepEqual(actual, expected, message)
}

const test = () => {
  shouldDeepEq(toggleMember(setWithFoo, 'foo'), setWithoutFoo, 'if member not in set, return new set with member')
  shouldDeepEq(toggleMember(setWithoutFoo, 'foo'), setWithFoo, 'if member in set, return new set without member')
}

test()
console.log('success')
