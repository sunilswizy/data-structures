

function countConstruct(target, arr, memo = {}) {

    if(target in memo) return memo[target];

    if(target === '') {
        return 1;
    }

    let count = 0;

    for(let word of arr) {
        if(target.startsWith(word)) {
            let suffix = target.substring(word.length);

            let result = countConstruct(suffix, arr, memo);
            count = result + count;
        }
    }

    memo[target] = count;

    return count;

}

// time complexity brute force
// o(n ^ m * m) - time
// o(m * m) - space

// complexity memorized
// o(m * m * m)
// o(m * m)


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));