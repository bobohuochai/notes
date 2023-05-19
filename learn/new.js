// 例子3
function Student(name){
    this.name = name;
    // this.doSth();
}
Student.prototype.doSth = function() {
    console.log(this.name);
};
var student1 = new Student('若');
var student2 = new Student('川');
console.log(student1, student1.doSth()); // {name: '若'} '若'
console.log(student2, student2.doSth()); // {name: '川'} '川'

Object.getPrototypeOf(student1) === Student.prototype; // true
Object.getPrototypeOf(student2) === Student.prototype; // true


function newOperator(ctor){

   if(typeof ctor !== 'function'){
       throw new Error('New operator must be a function')
   }
   const newObj = Object.create(ctor.prototype)
   const args = Array.prototype.slice.call(arguments,1)
   const ret = ctor.apply(newObj,args)
   if(typeof ret ==='object' || typeof ret === 'function'){
       return ret
   }
   return newObj
}

const obj1 = newOperator(Student,'example')

console.log(obj1,obj1.doSth())