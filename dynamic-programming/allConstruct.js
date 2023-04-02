


function allConstruct(target, arr, memo = {}) {
    if(target in memo) return memo[target];

    // console.log("target", target)
    if(target === '') {
        return [[]]
    }

    let items = [];

    for(let word of arr) {
        if(target.startsWith(word)) {
            let suffix = target.substring(word.length);

            let suffixWays = allConstruct(suffix, arr, memo);
            // console.log("inside ", suffixWays)
            let targetWays = suffixWays.map((way) => [word, ...way]);
            items.push(...targetWays);
            // console.log("targetWays", targetWays)
        }
    }

    // console.log("result", items)

    memo[target] = items;
    return items;
}

// complexity brute force 

// time complexity --> o(n ^ m * m ^ 2)
// space ---> o(m * m)


// memorized 
// time complexity --> o(n * m * m ^ 2)
// space ---> o(m * m)

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));

