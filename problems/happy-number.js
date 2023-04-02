let isHappy = function(n, cache={}) {
    if(n === 1) {
        return true;
    }

    if(n in cache) {
        return false;   
    }

    let str = String(n).split('');
    console.log(str)
    let total = 0;
    for(let num of str) {
        total += (num * num)
    }
    cache[n] = total;

    return isHappy(total, cache);
};


console.log(isHappy(2));