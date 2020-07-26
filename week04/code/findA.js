function findA(str) 
{
    let findStr = 'a';

    for (const iterator of str) {
        if (iterator === findStr) {
            return true;
        }
    }
    return false;
}

console.log(findA('bc'));