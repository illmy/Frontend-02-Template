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

let string = numberToString(0x11, 2);
console.log(string);