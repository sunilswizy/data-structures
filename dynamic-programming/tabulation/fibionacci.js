
function fib(n) {
    let arr = Array(n + 1).fill(0);
    
    arr[1] = 1;

    for(let i = 0; i <= n; i++) {
        arr[i+1] += arr[i]; 
        arr[i+2] += arr[i]; 
    }

    return arr[n];
}

console.log(fib(6));

// n = 6,  arr = 8

// complexity
// o(n) - time
// o(n) - space