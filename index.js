'use strict'

const toggleMember = (set, member) => {
  const newSet = new Set(set)
  if (newSet.has(member)) {
    newSet.delete(member)
  }
  else {
    newSet.add(member)
  }
  return newSet
}

module.exports = toggleMember