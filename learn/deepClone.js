const obj = {
  y: { arr: [1, { test: 1 }], b: 6 },
  x: function() {
    return "x";
  },
  val: 3,
  z: { c: 5 },
};
obj.circle = obj.z

const isObject = o => {
   return typeof o === 'object' && o !== null
};

const dfsDeepClone = (originObj,hash = new Map()) => {
  if(!isObject(originObj)) return originObj
  if (hash.has(originObj)) return hash.get(originObj); // 新增代码，查哈希表
  let result = Array.isArray(originObj) ? []:{}
  hash.set(originObj,result)
  for (let key in originObj) {
    if(Object.prototype.hasOwnProperty.call(originObj,key)){
        if (typeof originObj[key] === "object") {
            console.log(key);
            result[key] = dfsDeepClone(originObj[key],hash);
          } else {
            console.log(key);
            result[key] = originObj[key];
          }
    }
  }
  return result;
};
console.log(dfsDeepClone(obj));

console.log(dfsDeepClone([1, 2]));

const dfsDeepCloneStack = ori => {
  let target = isObject(ori);
  const stack = [];
  if (target !== ori) {
    stack.push([ori, target]);
  }
  while (stack.length) {
    let [o, tar] = stack.pop();
    Object.keys(o)
      .reverse()
      .forEach(key => {
        tar[key] = isObject(o[key]);
        if (tar[key] !== o[key]) {
          stack.push([o[key], tar[key]]);
        }
      });
  }
  return target;
};

//console.log(dfsDeepCloneStack(obj));

const bfsDeepClone = o => {
  const queue = [];
  let target = isObject(o);
  if (target !== o) {
    queue.push([o, target]);
  }
  while (queue.length) {
    let [ori, tar] = queue.shift();
    for (let key in ori) {
      console.log(key);
      tar[key] = isObject(ori[key]);
      if (tar[key] !== ori[key]) {
        queue.push([ori[key], tar[key]]);
      }
    }
  }
  return target;
};

//console.log(bfsDeepClone(obj));

// const bfsDeepCloneByRe = obj => {
//   let target = isObject(obj);
//   for (let key in obj) {
//     console.log(key);
//     target[key] = isObject(obj[key]);
//   }
//   for (let k in target) {
//     if (target[k] !== isObject(target[k])) {
//       target[k] = bfsDeepCloneByRe(obj[k]);
//     }
//   }
//   return target;
// };

// console.log(bfsDeepCloneByRe(obj));
