function Foo(propCount,elementCount) {
  for(let i =0;i<elementCount;i++){
    this[i] = `element${i}`
  }
  for(let i=0;i<propCount;i++){
    const prop = `property${i}`
    this[prop] = prop
  }
}

const foo = new Foo(12,12)






