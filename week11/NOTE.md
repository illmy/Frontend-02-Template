# 编程与算法练习

## 本周学习章节
* proxy的基本用法

## 章节内容

#### proxy的基本用法

proxy
> 一个 Proxy 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们。

Proxy 被用于了许多库和某些浏览器框架。在本文中，我们将看到许多实际应用。

语法：
```JaavaScript
let proxy = new Proxy(target, handler)
```

* target — 是要包装的对象，可以是任何东西，包括函数。
* handler — 代理配置：带有“陷阱”（“traps”，即拦截操作的方法）的对象。比如 get 陷阱用于读取 target 的属性，set 陷阱用于写入 target 的属性，等等。

|内部方法	|Handler 方法	|何时触发|
| :----: |  :----: |   :----: |
|[[Get]]|	get|	读取属性|
|[[Set]]|	set	|写入属性|
|[[HasProperty]]|	has	|in 操作符|
|[[Delete]]|	deleteProperty|	delete 操作符|
|[[Call]]|	apply|	函数调用|
|[[Construct]]|	construct|	new 操作符|
|[[GetPrototypeOf]]|	getPrototypeOf|	Object.getPrototypeOf|
|[[SetPrototypeOf]]|	setPrototypeOf|	Object.setPrototypeOf|
|[[IsExtensible]]|	isExtensible|	Object.isExtensible|
|[[PreventExtensions]]|	preventExtensions|	Object.preventExtensions|
|[[DefineOwnProperty]]|	defineProperty|	Object.defineProperty, Object.defineProperties|
|[[GetOwnProperty]]	|getOwnPropertyDescriptor|	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries|
|[[OwnPropertyKeys]]|	ownKeys|	Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries|