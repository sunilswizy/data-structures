

function slidingWindow(arr, k) {

    let start = 0;
    let sum = 0;
    let end = 0;
    let minLength = Infinity;

    while(end < arr.length) {
        sum += arr[end];
        end += 1;

        while(sum >= k &&  start < end) {
            sum = sum - arr[start];
            start += 1;

            minLength = Math.min(minLength, end - start + 1)
        }
    }

    return minLength;
}  

console.log(slidingWindow([1,2,3,4,5,6], 7))
