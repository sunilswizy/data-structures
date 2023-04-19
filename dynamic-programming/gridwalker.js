
let calculation = 0;

function gridWalker(n, m, cache = {}) {

    let key =`${n} , ${m}`;

    if(cache[key]) {
        return cache[key];
    }

    calculation ++;


    if(n == 1 && m == 1) {
        return 1;
    }

    if(n == 0 || m == 0) {
        return 0;
    }

   cache[key] = gridWalker(n - 1, m, cache) + gridWalker(n, m -1, cache);

   return cache[key];
}


// console.log(gridWalker(2, 3));
console.log(gridWalker(23, 12));
console.log(calculation)

//o(2^n+m) //time brute force
//now - 0(n * m) 
    // n = 4
    // m = 3
    // n can only be 1, 2, 3, 4
    // m can only be 1, 2, 3
    


//0(n+m) //space


