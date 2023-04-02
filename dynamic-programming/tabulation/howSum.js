

function howSum(target, nums) {
    let arr = Array(target + 1).fill(null);

    arr[0] = [];

    for(let i = 0; i <= target; i++) {
        if(arr[i] !== null) {
            for(let num of nums) {
                if((num + i) < target) {
                    arr[num + i] = [ ...arr[i], num];
                }
            }
        }
    }

    return arr[target];
}


// complexity

// time - o(n * m * m) --- extra for spread operation
// space - o(m * m) --- extra space for aray in each place

console.log(howSum(7, [2, 3]));
    