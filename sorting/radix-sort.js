function radixSort(arr) {
    let max = Math.max(...arr);
    let significantDigit = 1;
    while (max / significantDigit > 1) {
        let buckets = Array(10).fill().map(() => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = Math.floor((arr[i] / significantDigit) % 10);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
        significantDigit *= 10;
    }
    return arr;
}
console.log(radixSort([3,6,8,10,1,2,1]));


//https://www.cs.usfca.edu/~galles/visualization/RadixSort.html