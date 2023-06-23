## prototype 的定义

object that provides shared properties for other objects

在规范,prototype 被定义为：给其他对象提供共享属性的对象。


## 所有object 对象都有一个隐式引用
Every object has an implicit reference (called the object's prototype)

规范中明确描述了所有对象，都有一个隐式引用，它被称之为这个对象的prototype 原型。


## prototype chain 原型链

a prototype may have a non-null implicit reference to its prototype ,and so on ;
this is called the prototype chain.

既然 prototype 只是恰好作为另一个对象的隐式引用的普通对象。那么，它也是对象，也符合一个对象的基本特征。
也就是说，prototype 对象也有自己的隐式引用，有自己的 prototype 对象。
如此，构成了对象的原型的原型的原型的链条，直到某个对象的隐式引用为 null，整个链条终止。

### obj.name 和 obj[name]

``` javascript 

const lookupProperty = (obj,propertyName) => {
    let current = obj
    if(current == null) {
        throw new Error(`Cannot read property ${propertyName} of ${obj}`)
    }
    while(current) {
        if(current.hasOwnProperty(propertyName) {
            return current[propertyName]
        }
        else {
            current = Object.getPrototypeOf(current)
        }
    }
    return undefined
}

```
## 原型继承方式

### 显示原型继承

* Object.create(a)
* Object.setPrototypeOf(a,b)

### 隐式原型继承

1. 创建空对象
2. 设置空对象的原型为另一个对象或null
3. 填充该对象，增加属性和方法


* new 操作符

``` javascript

const createInstance = (Constructor,args)=>{
    const instance = Object.create(Constructor.prototype)
    Constructor.call(instance,...args)
    return instance
}

```
  

## 参考

* > https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg


### vite

`es module dev Server + HRM`

```js
<script type="module"></script>
```

浏览器模块解析算法只接受相对路径,已'/ ./ ../'开头，然后根据路径下载文件。

* [vite](https://z3rog.tech/blog/2020/simple-vite.html#loadmodulemiddleware) 

* [es module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

