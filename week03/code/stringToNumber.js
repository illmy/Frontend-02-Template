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

let number = stringToNumber('17.11');
console.log(number);