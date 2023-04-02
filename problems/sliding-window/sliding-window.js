

// function slidingWindow(arr, k) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         let total = arr[i]
//         for(let j = i + 1; j < i + k; j++) {
//             if(arr[j]) 
//                 total+= arr[j];
//         }
//         result.push(total);
//     }

//     return result;
// }  


// console.log(slidingWindow([1,2,3,4,5,6], 3))


// time complexity - onabort(n ^ k)
// space complexty - o(n)


function slidingWindow(arr, k) {

    let currenSubArray = 0
    for(let i = 0; i< k; i++) {
        currenSubArray += arr[i];
    }

    let result = [currenSubArray];

    for(let i = 1; i < arr.length; i++) {
        let currentCount = currenSubArray - arr[i - 1];
        if(arr[i + k - 1]) {
            currentCount += arr[i + k - 1];
        }
        console.log("currenSubArray", currenSubArray, currentCount, arr[i], arr[i - 1])
        currenSubArray = currentCount 
        result.push(currentCount);
    }

    return result;
}  

console.log(slidingWindow([1,2,3,4,5,6], 3))
