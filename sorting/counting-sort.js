function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    let sorted = [];
    for (let i = 0; i <= max; i++) {
        while (count[i]-- > 0) {
            sorted.push(i);
        }
    }
    return sorted;
}
console.log(countingSort([3,6,8,10,1,2,1]));


//https://www.cs.usfca.edu/~galles/visualization/CountingSort.html