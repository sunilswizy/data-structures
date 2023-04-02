

function fibnocci(n, type) { // 5
    console.log(type, n);
    if(n < 2) {
        return n;
    }
    return fibnocci( n - 1, "1") + fibnocci(n - 2, "2");
}

console.log(fibnocci(7))

//o(2 ^ n)

function fibnocci2(n) {
        
    let first = 0;
    let second = 1;
    let count = 0;

    if(n < 2) {
        return n;
    }

    for(let i = n; i > 1; i--) {
        count = first + second;
        first = second;
        second = count;
    }

    return count
}

console.log(fibnocci2(7));

function fibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }

fibonacciIterative(3);

//o(n)