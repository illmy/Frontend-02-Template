function findAb(str)
{
    let finda = 'a';
    let findb = 'b';
    let length = str.length;
    for (let index = 0; index < length; index++) {
        const element = str[index];
        if (index + 1 < length) {
            if (element === finda && str[index + 1] === findb) {
                return true;
            }
        }
    }
    return false;
}

console.log(findAb('abc'));