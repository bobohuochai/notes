"use strict";

var _dec, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

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
      };
    }

    return descriptor;
  };
} // function clsLog(name) {
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

let Example = (_dec = log('class member decorator'), clsLog(_class = (_class2 = class Example {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sum(a, b) {
    return a + b;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "sum", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "sum"), _class2.prototype)), _class2)) || _class);
const e = new Example('Graham', 34);
e.sum(2, 4);