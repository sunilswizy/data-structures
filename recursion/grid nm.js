

function getPaths(n, m) {
    if(n === 1 || m === 1) {
        return 1;
    }

    return getPaths(n - 1, m) + getPaths(n, m - 1)
}

console.log(getPaths(3, 3));
