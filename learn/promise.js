/**
 * 手动实现promises all
 * @param {} promises 
 */
function all(promises) {
  if (!promises || !promises.length) {
    throw new Error(`${promises} 不可迭代`)
  }
  const result = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      let value = promises[i]
      const key = i
      !value.then ? (value = Promise.resolve(value)) : value
      value.then((res) => {
        count++
        result[key] = res
        if (count === promises.length) {
          resolve(result)
        }
      }, (err) => {
        reject(err)
      })
    }
  })

}

/***
 * promise.race 手动实现
 */
function race(promises) {
  if (!promises || !promises.length) {
    throw new Error(`${promises} 不可迭代`)
  }
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      !p.then ? (p = Promise.resolve(p)) : p
      p.then((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    }
  })
}


var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

all([p1, p2, p3]).then((values) => {
  console.log(`all`, values)
})

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 60, 'two');
});

race([promise1, promise2]).then((value) => {
  console.log(`race`, value)
})


/**
 * 手动实现promise
 */
function promise(executor) {
  this.value = null
  this.reason = null
  this.status = 'pending'
  // 有可能执行then的时候状态为pending，所以需要将then 回调参数保存
  this.resolveCallbacks = []
  this.rejectCallbacks = []
  function resolve(value) {
    console.log('resolveCallbacks',this.resolveCallbacks)
    if (this.status !== 'pending') return
    this.status = 'resolve'
    this.value = value
    this.resolveCallbacks.map(fn => fn(this.value))
  }
  function reject(value) {
    if (this.status !== 'pending') return
    this.status = 'reject'
    this.reason = reason
    this.rejectCallbacks.map(fn => fn(this.reason))
  }
  executor(resolve.bind(this), reject.bind(this))
}
promise.prototype.then = function (onResolve, onReject) {
  function resolvePromise(x, resolve, reject) {
    let called = false
    try {
      if (x instanceof promise) {
        let then = x.then
        then.call(x, y => {
          if (called) return
          called = true
          resolve(y)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      reject(e)
    }
  }
  return new promise((resolve, reject) => {
    if (this.status === 'pending') {
      this.resolveCallbacks.push(() => {
        let x = onResolve(this.value)
        resolvePromise(x, resolve, reject)
      })
      this.rejectCallbacks.push(() => {
        let x = onReject(this.value)
        resolvePromise(x, resolve, reject)
      })
    }
    if (this.status === 'resolve') {
      console.log('then==>', this.status, this.value)
      let x = onResolve(this.value)
      resolvePromise(x, resolve.reject)
    }
    if (this.status === 'reject') {
      let x = onReject(this.reason)
      resolvePromise(x, resolve, reject)
    }
  })

}

new promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
  console.log('promise')
}).then((value) => {
  console.log('my promise', value)
  return value
}).then((value)=>{
  console.log('then promise',value)
})

/**
 * 手写promise
 */

