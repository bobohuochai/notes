function Super(name) {
    this.name = name
}
Super.prototype.add = function() {
   this.age = this.age + 1
}
Super.prototype.age =1 
Super.prototype.data = {
    count:1
}


const a = new Super('A')
const b = new Super('B')
a.data.count =2
console.log(b.data,a.data)



function Person(){
    this.pro1 = 'test'
    this.pro2  =1
}
Person.prototype.age =18
const fnObj = Object.create(Person.prototype)

console.log('obj====>',fnObj.age)

const personObj ={
    age:1
}
const obj = Object.create(personObj)
console.log(obj.age)