var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function deepFlatten(arr) {
    const flatArr = arr.flat(Infinity)
    const uniqueArr =Array.from(new Set([...flatArr]))
    uniqueArr.sort((a,b)=>a-b)
    return uniqueArr
}

function deepFlatten2(arr) {
  return arr.toString().split(',').sort((a,b)=>a-b)
}


Array.prototype.flat1 = function(){
    return [].concat(...this.map(item=>Array.isArray(item) ? item.flat1():[item]))
}

 console.log(arr.flat1())

console.log(deepFlatten(arr))
deepFlatten2(arr)