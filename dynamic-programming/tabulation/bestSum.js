

function bestSum(target, nums) {
    let arr = Array(target + 1).fill(null);

    arr[0] = [];

    for(let i = 0; i<= target; i++) {
        if(arr[i] !== null) {
            for(let num of nums) {
                let check = num + i;
                if(check <= target) {
                    let items = [...arr[i], num];
                    if(!arr[check] || arr[check].length > items.length) {
                        arr[check] = items;  
                    }   
                } 
            }
        }
    } 

    console.log(arr)

    return arr[target];
} 


// complexity

// time - o(n * m * m)
// space - o(m * m)

console.log(bestSum(7, [4, 2, 3]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

