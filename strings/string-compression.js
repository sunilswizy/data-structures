

function compress(str) {
    
    let res = "";
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        count++;

        if(str[i] !== str[i + 1]) {
            res += str[i] + count;
            count = 0;
        }
    }

    return res.length > str.length ? str : res;

}

console.log(compress("aabcccccaaa"))
