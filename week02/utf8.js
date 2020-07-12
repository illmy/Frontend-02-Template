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
    console.log(bytes);
    return Buffer.from(bytes);
}

let buffer = UTF8_Encoding('123456刘严');
console.log(buffer);
