

function howSum(target, arr, cache = {}) {

    if(target in cache) return cache[target];
    console.log(target);
    if(target === 0) {
        return [];
    }

    if(target < 0) {
        return null;
    }

    for(let num of arr) {
        let remainder = target - num;
        cache[target] = howSum(remainder, arr, cache);
        const result = cache[target];
        if(result !== null) {
            console.log(result)
            return [...result, num]
        }
    }
    
    return null;
};

console.log(howSum(300, [7, 14]));

// --- brute force
// (n^m * m) where n is array and m is target 
// there will extra time complexity for spread operation

// space --- o(m + m) ==> o(m)

// memoRized -- time => o(n * m^2) 
// space -- o(m * m)
