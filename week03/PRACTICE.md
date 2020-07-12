# 第三周练习

## 练习一
完成 StringToNumber 和 NumberToString 两个函数

```JavaScript
/**
 * 字符串转数字 如果string以0x开头，按16进制计算
 * @param string string 
 */
function stringToNumber(string, radix = 10) {
    if (!(typeof string === 'string' && string.constructor === String)) {
        return false;
    }
    if (radix < 2 || radix > 32) {
        return false;
    }
    let number;
    if (string.match(/\./)) {
        number = parseFloat(string, 10);
    } else if (string.match(/^0x/i)) {
        number = parseInt(string);
    } else if (string.match(/^0/i)) {
        number = parseInt(string.substr(1), 8);
    } else {
        number = parseInt(string, radix);
    }

    return number;
}

/**
 * 数字转字符串
 * @param number $number
 * @param int $radix
 */
function numberToString(number, radix = 10) {
    if (!(typeof number === 'number' && !isNaN(number))) {
        return false;
    }
    if (radix < 2 || radix > 32) {
        return false;
    }
    let string = '';
    string = number.toString(radix);
    return string;
}

```

demo链接  
[stringToNumber](https://github.com/illmy/Frontend-02-Template/blob/master/week03/code/stringToNumber.js)  
[numberToString](https://github.com/illmy/Frontend-02-Template/blob/master/week03/code/numberToString.js)

## 练习二  
尝试找出 JavaScript 引擎里面 Realm 所有的对象，使用一个 JS 数据可视化的框架去做一个可视化

demo链接  
[realm](https://github.com/illmy/Frontend-02-Template/blob/master/week03/code/realm.html)  