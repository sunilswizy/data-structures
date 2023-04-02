
let calculate = 0;

function series() {
    let cache = {}
    return function fib(n) {
        calculate ++;
        if(n < 2) {
            return n;
        }

        if(!(n in cache)) {
            cache[n] = fib(n - 1) + fib(n - 2);
        }
        return cache[n]
    }
}

let fibonoci = series()

console.log(fibonoci(20))
console.log("Iteration count ", calculate);


//ver 2
let calculate2 = 0
function series1() {
    let cache = {}
    return function fib(n) {
        calculate2 ++;
        if(n < 2) {
            return n;
        }

        if(!cache[n - 1]) {
            cache[n - 1] = fib(n - 1);
        }

        if(!cache[n - 2]) {
            cache[n - 2] = fib(n - 2);
        }

        return cache[n - 1] + cache[n - 2];
    }
}

let fin = series1();
console.log(fin(100))

console.log("Ca", calculate2)
