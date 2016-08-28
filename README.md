# toggle-member

`toggleMember(set, member)` returns a new set with/without `member`.

```js
const toggleMember = require('toggle-member')
const setWithFoo = new Set(['foo', 'bar'])
toggleMember(setWithFoo, 'foo') // Set(['bar'])
toggleMember(setWithFoo, 'baz') // Set(['foo', 'bar', 'baz'])

// or use with chill-patch to safely monkey patch Set
const chillPatch = require('chill-patch')
const toggle = chillPatch(Set, toggleMember)
setWithFoo[toggle]('foo') // Set(['bar'])
```




Requires ES2015 `Set`:
- See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Browser_compatibility).
- Or include [ES6 Shim](https://github.com/paulmillr/es6-shim).
