// 节流 每time时执行一次
// 注意定时器不会函数执行时每次都会创建，而是前一个定时器执行完后，才创建新的定时器，
// 所以理论上可以达到降低频率的效果
const throttle = (fn, time) => {
  let timer = null;
  let canRun = true;
  return function(...args) {
    if (!canRun) {
      return;
    }
    if (canRun) {
      canRun = false;
      timer = setTimeout(() => {
        fn.apply(this, args);
        canRun = true;
        if (timer) {
          clearTimeout(timer);
        }
      }, time);
    }
  };
};

// 防抖 某个事件结束后time时间执行一次
// 注意定时器每次函数执行时都会被创建，所以一直会等到事件结束过time时间才会执行一次
const debounce = (fn, time) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};

var main = () => {
  const log = i => {
    console.log(i);
  };

  var thlog = throttle(log, 20);

  var debouncelog = debounce(log, 20);

  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      thlog(i);
     //debouncelog(time);
    }, i);
  }
};

main();
