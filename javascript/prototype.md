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

## 原型继承方式

### 显示原型继承

* Object.create(a)
* Object.setPrototypeOf(a,b)

### 隐式原型继承

* new 操作符

## 参考

* > https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg