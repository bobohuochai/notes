let value = 2;
let foo = {
  value: 1
};
function bar(name, age) {
  return {
    value: this.value,
    name,
    age
  };
}

bar.call(foo, "Jack", 20);

let bindFoo = bar.bind(foo, "Jack",20);
console.log(bindFoo(18));

Function.prototype.newBind = function(ctx) {
  if(typeof this !== 'function'){
    console.error('no function')
    return
  }
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function() {
    const fnArgs = Array.prototype.slice.call(arguments);
    return self.apply(ctx, args.concat(fnArgs));
  };
};

let newBindFoo = bar.newBind(foo, "jack",20);
console.log(newBindFoo(18));

Function.prototype.newBind2 = function(obj,...args) {
   const self = Object.create(obj)
   self['_fn'] =this
   const res = function(){
     return self['_fn'](...[...args,...arguments])
  }
  return res
}

let newFoo2 = bar.newBind2(foo,"jack",20);
console.log(newFoo2(18))