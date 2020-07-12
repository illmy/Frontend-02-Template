# 学习笔记

## 总结  

通过本周学习发现自己计算机基础特别差，需要加强基础学习

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

#### 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。
```JavaScript
function UTF8_Encoding(string) {
    if (typeof string !== 'string') {
        return false;
    }
    let bytes = new Array();
    for (let index = 0; index < string.length; index++) {
        let num = string.charCodeAt(index);
        let bin = num.toString(2);
        if(num >= 0x010000 && num <= 0x10FFFF) {
            let str4 = '10' + bin.slice(-6);
            let str3 = '10' + bin.slice(-12, -6);
            let str2 = '10' + bin.slice(-18, -12);
            let str1 = '11110' + (bin.slice(0, -18)).padStart(3, '0');
            bytes.push(str1 + str2 + str3 + str4);
        } else if(num >= 0x000800 && num <= 0x00FFFF) {
            let str3 = '10' + bin.slice(-6);
            let str2 = '10' + bin.slice(-12, -6);
            let str1 = '1110' + (bin.slice(0, -12)).padStart(4, '0');
            bytes.push(str1 + str2 + str3);
        } else if(num >= 0x000080 && num <= 0x0007FF) {
            let str2 = '10' + bin.slice(-6);
            let str1 = '110' + (bin.slice(0, -6)).padStart(5, '0');
            bytes.push(str1 + str2);
        } else if(num >= 0x000000 && num <= 0x00007F) {
            let str1 = bin.padStart(8, '0');
            bytes.push(str1);
        } else {
            return false;
        }
    }
    return Buffer.from(bytes);
}
```


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

#### 找出 JavaScript 标准里面所有具有特殊行为的对象

```JavaScript
Object.prototype
Object.prototype.constructor
Function call
Function length
Function name
Array length
Number EPSILON MAX_VALUE MAX_SAFE_INTEGER 
       MIN_SAFE_INTEGER MIN_VALUE NEGATIVE_INFINITY NaN POSITIVE_INFINITY prototype 

Math E 
```