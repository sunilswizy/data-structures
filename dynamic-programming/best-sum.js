

function bestSum(arr, target, cache = {}) {
    if(target in cache) return cache[target];

    console.log(target)
    if(target === 0) {
        return [];
    }

    if(target < 0) {
        return null;
    }

    let shortestCombination = null;

    for(let num of arr) {
        let remainder = target - num;

        let result = bestSum(arr, remainder, cache);
        if(result) {
            let combination =  [...result, num];
            // console.log(combination)
            console.log("shortestCombination", shortestCombination)
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
            // console.log(combination)
            console.log("shortestCombination", shortestCombination)
        }
    }
    cache[target] =  shortestCombination
    return shortestCombination;
}

// time completxity brute force
// o(n ^ m * m)
// n - length of arr
// m - target
// * m - for performing the spread operation (maximun size of that array will be m(if every element is 1))

//space
// o(m * m)
// m space for call stack and m for storing tha combination(combination length may upto m in worse case)

// best case
// o(n * m ^ 2)
// o(m * m)


console.log(bestSum([5, 3, 4, 7], 7));
console.log(bestSum([1, 5 , 25], 100));