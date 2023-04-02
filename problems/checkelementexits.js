let a = ['a', 'b', 'c'];
let b = ['x', 'y', 'x', 'x'];


function checkElement() {

    let obj = {};

    for(let item of a) {
        if(!obj[item]) 
            obj[item] = true;
    }

    for(let item of b) {
        if(obj[item]) {
            return true;
        }
    }

    return false;
}

// o(n) + o(m) ==> o(n + m)

console.log(checkElement())