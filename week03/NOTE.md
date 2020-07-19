# 学习笔记  

## 本周主要学习章节
1. 运算符和表达式
2. 类型转换
3. 运行时相关概念
4. 简单语句和复合语句
5. 声明
6. 宏任务和微任务
7. JS函数调用

## 概念说明
* MemberExpression: 成员表达式
* Reference: 除了基本类型外，还有 reference 类型，不过它对使用者屏蔽，作为开发者，我们也不用关心它。ECMAScript 将 Reference 定义为“被解析的命名绑定（resolved name binding）”，它由三部分组成——base,name, and strict flag。
* realm: 存放内置对象的空间。在一个JavaScript引擎的实例里面，所有的内置对象会被放进一个realm里面去

## 概念解析
* Reference  
    ECMAScript 将 Reference 定义为“被解析的命名绑定（resolved name binding）”，它由三部分组成——base,name, and strict flag。

    有两种创建 Reference 的途径：

    > 标识符解析  
    > 属性访问  

    this指向  
    ```JavaScript
    var foo = {bar: function () {return this}}
    var b = foo.bar
    
    foo.bar();
    b();
    var c = new someFunction(); 
    ```
    比如，foo 和 foo.bar 创建了一个 Reference ，而字面量（1，“foo”，[1,3]等）或函数表达式——(function(){})却不会  
    参考下表  
    |  例子             | Reference | 备注 |  
    |  ----             | ----     | ---- |
    | "foo"             | No | |
    | 123               | 单元格 | |
    | /x/               | 单元格 | |
    | (function(){})    | 单元格 | |
    | foo               | No | |
    | foo.bar           | 单元格 | |
    | (123).toString()  | 单元格 | |
    | (function(){}).toString()    | 单元格 | |
    | (1, foo.bar)      | No | |
    | (f = foo.bar)     | 单元格 | |
    | (foo)             | 单元格 | |
    | (foo.bar)         | 单元格 | |

## 章节内容  
1. Expressions  
    1. Member
        > a.b  
        > a[b]  
        > foo\`string\`  
        > super.b  
        > super['b']
        > new.target
        > new Foo()
        ```JavaScript
        function foo() {
            console.log(new.target)
        }
        foo()	// undefined
        
        function bar() {
            console.log(this)
        }
        var fackObject = {}
        Object.setPrototypeOf(fackObject, bar.prototype)
        fackObject.constructor = bar
        bar.apply(fackObject)
        ```

    2. New
        > new Foo
    
        Reference 是什么  