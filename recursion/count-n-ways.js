

function count(n, m) {

    if(n === 0 ) {
        return 1;
    }

    if(m == 0 || n < 0) return 0;
    
    return count(n - m, m) + count(n, m -1);
} 

console.log(count(5, 3))
 