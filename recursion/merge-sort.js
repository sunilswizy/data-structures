
function mergerSort(arr) {
    if(arr.length === 1) return arr; 

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    return merge(mergerSort(left), mergerSort(right))

}


function merge(left, right) {
    let leftPointer = left[0];
    let rightPoineter = right[0];
    console.log(left, right);

    let sortedArr = []
    let i = 1;
    let j = 1;

    while((rightPoineter === 0 || leftPointer === 0) || leftPointer || rightPoineter) {
        console.log("inside",leftPointer, rightPoineter)
        if(rightPoineter === undefined || leftPointer < rightPoineter) {
            sortedArr.push(leftPointer);
            leftPointer = left[i];
            i++;
        }
        else {
            sortedArr.push(rightPoineter);
            rightPoineter = right[j];
            j++;
        }
    }

    console.log("sortedArr", sortedArr)
    return sortedArr;
}

console.log(mergerSort([10, -1, 20, -2, 30, -3, 40, 0, -4, 50, -5]));