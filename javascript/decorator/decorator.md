## What is a Decorator?
a decorator is simply a way of wrapping one piece of code with another - literally "decorating" it. higher-order functions.

``` javascript

function doSomething(name){
    console.log('hello' + name)
}

function loggingDecorator(wrapped){
    return function() {
        console.log('starting')
        const result = wrapped.apply(this,arguments)
        console.log('Finished')
        return result
    }

}

const wrapped = loggingDecorator(doSomething);
```
## Different Types of Decorator

At present,the only types of decorator that are suppported are on classes and members of classes.


### class memeber decorators

* target: the class that the member is on 
* name: the name of the member in the class
* descriptor: the member descriptor.This is essentially the object that would have been passed to Object.defineProperty.


``` javascript

function log(name) {
    return function decorator(t, n, descriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function (...args) {
                console.log(`Arguments for ${name}:${args}`);
                try {
                    const result = original.apply(this, args);
                    console.log(`Result from ${name}: ${result}`);
                    return result;
                } catch (e) {
                    console.log(`Error from ${name}: ${e}`);
                    throw e;
                }
            }
        }
        return descriptor
    }
}
```
## Class decorators

The decorator function is called with a single parameter which is the constructor function being decorated.

``` javascript
```