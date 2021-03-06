const { writeHeapSnapshot } = require('v8')

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this["B"] = 'foo-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this["A"] = 'foo-A'
  this["C"] = 'foo-C'
}

const foo = new Foo()

console.log(foo)
for (const key in foo) {
  console.log(`key:${key}, value:${foo[key]}`)
}

writeHeapSnapshot();
