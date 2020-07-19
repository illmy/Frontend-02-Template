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
    | 123               | No | |
    | /x/               | No | |
    | (function(){})    | No | |
    | foo               | Yes | 如果没有定义foo的话，就不能解析出reference |
    | foo.bar()         | Yes | Property reference |
    | (123).toString()  | Yes | Property reference |
    | (function(){}).toString()    | Yes | Property reference |
    | (1, foo.bar)      | No | 经逗号运算符计算后，得到一个新值 |
    | (f = foo.bar)     | No | 经赋值操作后返回一个新值|
    | (foo)             | Yes | |
    | (foo.bar)         | Yes | Property reference|

    每创建一个 Reference 都会为其对应的 base，name，strict 设置相应的值。"strict "对应代码是否开启了严格模式；"name"设置为标识符或属性名；"base"设置为 property 对象或环境记录（environment record）。  

    可以认为 Reference 是一个不带原型、有且只有 3 个属性的对象。譬如说：  
    ```JavaScript
    'use strict';
    var foo;

    // 标识符解析会产生 Reference
    var Reference = Object.create(null);
    Reference.base = EnvironmentRecord;
    Reference.name = 'foo';
    Reference.strict = true;

    // or
    foo.bar;

    // 属性访问会产生 Reference
    var Reference = Object.create(null);
    Reference.base = foo;
    Reference.name = 'bar';
    Reference.strict = true;

    // or 使用未声明的变量
    a;
    var Reference = Object.create(null);
    Reference.base = undefined;
    Reference.name = 'a';
    Reference.strict = true;
    ```

## 章节内容  
### Expressions  (按优先级先后)
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
    
    3. Call
        > foo()  
        > super()  
        > foo()['b']  
        > foo().b  
        > foo\`abc\`

        Example: 
        new a()['b']

    4. Left Handside & Right Handside  
    5. Update  
        > a++  
        > a--  
        > --a  
        > ++a
    6. Unary (一元)  
        > delate a.b  
        > void foo()  
        > typeof a  
        > \+ a  
        > \- a  
        > ~ a  
        > ! a  
        > await a  

    7. Exponential (指数, 唯一右结合)
        > **

    8. Multiplicative
        > \* / %

    9. Additive
        > \+ -

    10. Shift 
        > << >> >>>
    
    11. Relationship
        > < > <= >= instanceof  in

    12. Equality  
        > ==  
        > !=    
        > \===  
        > !== 
    
    13. Bitwise
        > & ^ |

    14. Logical  
        > &&  
        > ||  

    15. Conditional (三元运算符)
        > ?:

### 类型转换
