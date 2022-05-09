const o1 = ['a', 'b', 'c']
console.log(o1[1])          // 'b'.

delete o1[1]
console.log(o1[1])          // undefined
o1.__proto__ = { 1: 'B' }
console.log(o1[0])          // 'a'.
console.log(o1[1])          // 'B'. 但如何确定要访问原型链？
console.log(o1[2])          // 'c'.
console.log(o1[3])          // undefined