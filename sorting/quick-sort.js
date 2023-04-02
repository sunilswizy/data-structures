const numbers = [99, 44, 6, 2, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array){
    if(array.length <= 1) {
        return array;
    }

    let pivot = getPivot(array);

    let left = [];
    let middle = [];
    let right = [];

    array.forEach((num => {
        if(num < pivot) {
            left.push(num);
        }
        else if(num === pivot) {
            middle.push(num)
        }
        else {
            right.push(num);
        }
    }));

    return [...quickSort(left), ...middle , ...quickSort(right)]
}


console.log(quickSort(numbers))


function getPivot(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    let middle = arr[Math.floor((arr.length - 1) / 2)];
    let pivot = [first, last, middle].sort((a, b) => a - b)[1];
    return pivot;
}

// console.log(quickSort([3,6,8,10,1,2,1]));
// console.log(numbers);