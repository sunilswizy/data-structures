
function canSum(target, arr) {
    console.log(target)

    if(target === 0) {
        return true;
    }
    if(target < 0) {
        return false;
    }
    

    for(let num of arr) {
        let remainder = target - num;

        if(canSum(remainder, arr) === true) {
            return true;
        } 
    }

    return false;
}


// time complexity -- height of the tree will be target(worst case num is 1)
// (n^m) where n is array and m is target
// o(m)

// console.log(canSum(300, [7, 14]));



function canSumMemo(target, arr, cache = {}) {
    // console.log(target)

    if(target === 0) {
        return true;
    }
    if(target < 0) {
        return false;
    }
    

    for(let num of arr) {
        let remainder = target - num;

        if(!(target in cache)) {
            cache[target] = canSumMemo(remainder, arr, cache)
        }

        if(cache[target]) {
            return true;
        } 
    }

    return false;
}


console.log(canSumMemo(300, [10, 14]));


// o(n * m)

// function canSum2(target, arr) {
    
//     let cache = new Map();

//     for(let num of arr) {
//         console.log(num)
//         if(cache.has(num)) {
//             return [target - num, num]
//         }
//         cache.set(target - num, num);
//     }

//     return [];

// }


// console.log(canSum2(12, [5, 3, 4, 7]))