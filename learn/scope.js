/*** 作用域 */
var result = [];
var a = 3;
var total = 0;
function foo(a) {
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function() {
      console.log(i, a, total);
      total += i * a;
      console.log(total);
    };
  }
}

var execFn = (function(){
    var gtokey=11
})()


console.log(111111,gtokey)

foo(1);
result[0]();
result[1]();
result[2]();

