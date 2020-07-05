# 学习笔记

## 练习一

#### 带括号的四则运算
* （1 + 2）* 3

#### 终结符
* Number 
* + - * / 
* ( )

#### 非终结符
* MultiplicativeExpression
* AddtiveExpression
* MixBracketsExpression

#### 产生式BNF
```BNF
<MultiplicativeExpression>::=<Number>|
    <MultiplicativeExpression>"*"<Number>|
    <MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
    <AddtiveExpression>"+"<MultiplicativeExpression>|
    <AddtiveExpression>"-"<MultiplicativeExpression>|
<MixBracketsExpression>::=<AddtiveExpression>|
    "("<AddtiveExpression>")"
```

## 练习二

#### 寻找你知道的计算机语言，尝试把它们分类  

* 了解过的计算机语音  
> 汇编、C、C++、C#、Object C、Swift、Dart、Java、JavaScript、TypeScript、Lua、Golang、Python、PHP、Shell、Lisp  
JSON、HTML、XAML、SQL、CSS

* 形式语言——用途
  * 数据描述语言
  > JSON、HTML、XAML、SQL、CSS
  * 编程语音
  > 汇编、C、C++、C#、Object C、Swift、Dart、Java、JavaScript、TypeScript、Lua、Golang、Python、PHP、Shell、Lisp 

* 形式语言——表达方式
  * 声明式语言
  > JSON、HTML、XAML、SQL、CSS、Lisp
  * 命令型语言
  > 汇编、C、C++、C#、Object C、Swift、Dart、Java、JavaScript、TypeScript、Lua、Golang、Python、PHP、Shell


## 练习三



## 练习四

#### 用 JavaScript 去设计狗咬人的代码

```javaScript
class Dog {
    bite(object) {
        object.hurt(5);
    }
}

class Human {
    constructor() {
        this.volumes = 100;
    }

    hurt(volume) {
        this.volumes -= volume;
    }
}
```

## 练习五
