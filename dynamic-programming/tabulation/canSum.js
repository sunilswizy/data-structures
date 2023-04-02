

function canSum(target, nums) {
    let arr = Array(target + 1).fill(false);

    arr[0] = true;
    console.log(arr)

    for(let i = 0; i< arr.length; i++) {
        if(arr[i]) {
            for(let num of nums) {
                if(( i + num) <= target) {
                    arr[i + num] = true;
                } 
            }
        }
    }

    console.log(arr)

    return arr[target];
}

console.log(canSum(7, [2, 3]));

// complexity

// m - target
// n - length of arr

// n * m - time -- nested loop

// o(m) - for arr

