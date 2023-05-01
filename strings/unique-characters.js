

function unique(str) {
    let map = {};

    for(let s of str) {
        if(map[s]) {
            return false;
        }

        map[s] = true;
    }

    return true;
}


console.log(unique('apple'));
console.log(unique('orange'));




