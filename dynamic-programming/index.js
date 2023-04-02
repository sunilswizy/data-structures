let cache = {};

function calculateMe(n) {
    if(!cache[n]) {
        console.log("Lonk time to calc");
        cache[n] = n + 100;
    }
    return cache[n];
}


// console.log(calculateMe(10));
// console.log(calculateMe(10));
// console.log(calculateMe(10));
// console.log(calculateMe(1));
// console.log(calculateMe(1));


//using closure
function memorizeMe() {
    let cache = {};
    return function(n) {
        if(!cache[n]) {
            console.log("Lonk time to calc");
            cache[n] = n + 100;
        }
        return cache[n];
    }
}


let memo = memorizeMe();

console.log(memo(10))
console.log(memo(10))
console.log(memo(10))


