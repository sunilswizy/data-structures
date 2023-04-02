

function canConstruct(target, arr, memo = {}) {

    if(target in memo) return memo[target];
    console.log(target);


    if(target === '') {
        return true
    } 

    for(let item of arr) {
        if(target.startsWith(item)) {
            let balance = target.substring(item.length);

            memo[balance] = canConstruct(balance, arr, memo);
            if(memo[balance]) {
                return true
            }
        }
    }
    
    memo[target] = false
    return false;
}   

// brute force
// time complexity
//m -> length of target word
//n -> length of array
// o(n ^ m * m)
// space complexity
// o(m * m)

//memorized

// time complexity
// o(n * m * m)
//space complexity
//o(m * m )


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'adcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));


