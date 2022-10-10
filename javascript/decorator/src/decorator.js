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

// function clsLog(name) {
//     return function decorator(Class) {
//         return (...args) => {
//           console.log(`Arguments for ${name}: args`);
//           return class extends Class {
//             constructor(...args) {
//               console.log("log", args);
//               super(...args);
//             }
//           };
//         }
//     }
// }

function clsLog(cls) {
    return class extends cls {
        constructor(...args) {
            console.log("log", args);
            super(...args);
        }
    };
}

@clsLog
class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    @log('class member decorator')
    sum(a,b){
        return a+b
    }
}

const e = new Example('Graham', 34)
e.sum(2,4)
