
function factoraial(n) {
    if(n < 2) {
        return n;
    }
    return factoraial(n - 1)  * n;
}

console.log(factoraial(5));

//o(n)

function factoraial2(n) {
    let fact = 1;

    for(let i = 2; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factoraial2(5))

//o(n)
