const person = {
    name:'lihua'
}

function hello(age,arg) {
    console.log(this.name,age,arg)
}

hello.call(person,20,111)

Function.prototype.newCall = function(ref){
    if(typeof this !== 'function'){
        throw 'newCall must be a function'
    }
    const self = {...ref}
    console.log('self====>',self.name)
    const args = [...arguments].slice(1)
    self.fn = this
    return self.fn(...args)
}

hello.newCall(person,18,12)