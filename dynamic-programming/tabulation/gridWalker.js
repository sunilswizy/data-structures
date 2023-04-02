

function gridWalker(n, m) {
    let arr = Array(m + 1).fill(0).map(() => Array(n+1).fill(0));
    arr[1][1] = 1;
    
    for(let i = 1; i <= n; i++) {
        console.log(i)
        for(let j = 1; j <= m; j++) {
            if(j + 1 <= n) arr[i][j + 1] += arr[i][j];
            if(i + 1 <= m) arr[i + 1][j] += arr[i][j];
        } 
    }
    console.log(arr);

    return arr[n][m];
}

console.log(gridWalker(3, 3));
