/***
 * 写一个加法函数sum，支持sum(1)(2)(3,4)(5,6,7....)  
 * console.log(sum(1,2,3)(4).run()) => 输出 10
 * console.log(sum(1,2,3)(4)()) => 输出 10
 */
const _add = function() {
  return [...arguments].reduce((acc, cur) => acc + cur,0);
};


const curry = function(fn, params) {
  let newArgs = params ||[]
  let ret = function() {
    console.log('params===>',params)
    if (arguments.length) {
      return curry.call(null, fn,  [...arguments].concat(newArgs));
    }else{
      let temp = [...newArgs]
      newArgs =[]
      return fn.apply(null, temp);
    }
  }
  ret.run =function(){
    console.log('run new args===>',newArgs)
    return fn.apply(null,newArgs)
  }
  return ret
};

const sum = curry(_add);
console.log(sum(10,2,3)(4, 5, 6)());
console.log(sum(1,2,3)(4)(5).run());


function add(a,b,c) {
    return a+b+c
}

function currying(fn,length) {
    
}

