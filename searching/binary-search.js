function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;

    while(start <= end) {

        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > item) {
            end = mid - 1;
        }
        else if(arr[mid] === item) {
            return mid;
        }
        else {
            start = mid + 1;
        }

        console.log(mid, start, end)

    }

    return -1;
}


// console.log(binarySearch([1, 3, 5, 7, 9, 20], 0));


function binarySearch(x) {
    let first = 0;  // start from 0
    let last = x;   // end number is x
    // like : 0 1 2 3 4 ......... x
    let mid = Math.floor((first + last) / 2);   // Find the middle number
    while (first <= last) {
        let pow = mid * mid;    // Find the power of the middle number
        if (pow == x) {     // if the power number is equal to the x then return mid
            return mid;
        }
        if (pow > x) {      // If the pow is greater-than x then modify the last to mid-1 
            last = mid - 1;
        }
        else {
            first = mid + 1;    // If the pow is less-than the x then modify the first to mid+1 
        }
        console.log("mid", mid, first, last)
        mid = Math.floor((first + last) / 2);   // Find the middle number
    }
    return mid;     // Lastly return the mid number
}

console.log(binarySearch(8))