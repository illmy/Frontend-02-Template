function findStr(str, find)
{
    let found = false;
    for (let s = 0; s < str.length; s++) {
        if (str[s] === find[0]) {
            found = true;
            for (let f = 1; f < find.length; f++) {
                if (str[s + f] === find[f]) {
                    found = true;
                } else {
                    found = false;
                    break;
                }    
            }
        } 
    }
    return found;
}

console.log(findStr('assssabcs', 'abcs'));