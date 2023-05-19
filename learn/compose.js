/**
 *
 * 上一个函数的结果是下一个函数的输入
 * 重右往左执行
 */
const compose = (...args) => {
  const length = args.length;
  let count = length - 1;
  return function fn1() {
    let result = args[count].apply(this, arguments);
    if (count <= 0) {
      count = length - 1;
      return result;
    } else {
      count--;
      return fn1.call(this, result);
    }
  };
};

const toLowercase = str => str.toLowerCase();

const toUpper = str => str.toUpperCase();

const greeting = (firstName, lastName) => `hello,${lastName},${firstName}`;

const composeFn = compose(
  toLowercase,
  toUpper,
  greeting
);

console.log(composeFn("Jun", "Xu"));


/**
 * koa
 * @param {} ctx 
 * @param {*} middlewares 
 * @returns 
 */
function composeKOA(ctx, middlewares) {
  // {1} 先判断middlewares是否方法数组
  if (!Array.isArray(middlewares)) throw new TypeError('Middlewares stack must be an array!')
  
  // {2}
  for (const fn of middlewares) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }
  // 返回一个promise的递归集合
  return function() {
    const len = middlewares.length; // {3} 获取数组长度
    // 第一个promise 当next返回i-1的回调 下面的类推
    const dispatch = function(i) { // {4} 这里是我们实现的关键
      if (len === i) { // {5} 中间件执行完毕
        return Promise.resolve(); // 结束递归
      } else {
        const fn = middlewares[i]; // {6} 当前中间件方法 ，放到promise中，回调剩余方法  由于await next()，剩余的方法是dispatch而不是dispatch(i) 由于需要传残 所以用bind
        
        try {
          // {7} 这里一定要 bind 下，不要立即执行
          return Promise.resolve(fn(ctx, dispatch.bind(null, (i + 1))));
        } catch (err) {
          // {8} 返回错误
          return Promise.reject(err);
        }
      }
    }

    return dispatch(0);
  }
}

const middlewares = []
let mw1 = async function (ctx, next) {
    console.log("next前，第一个中间件")
    await next()
    console.log("next后，第一个中间件")
}
let mw2 = async function (ctx, next) {
    console.log("next前，第二个中间件")
    await next()
    console.log("next后，第二个中间件")
}
let mw3 = async function (ctx, next) {
    console.log("第三个中间件，没有next了")
}

middlewares.push(mw1)
middlewares.push(mw2)
middlewares.push(mw3)


const fn = composeKOA(null,middlewares)
fn()