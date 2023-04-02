// a = [1, 2, 3, 9]  sum = 8
// a = [1, 3, 4, 4]  sum = 8

let a = [1, 3, 4, 7]
let sum = 8;

function binarySearch(array, findElement) {
    let first = 0;
    let last = array.length - 1;

    while(first <= last) {
        let mid =  Math.floor((first + last) / 2);
        if(array[mid] === findElement) {
            return mid
        }
        else if(array[mid] > findElement) {
            last = mid - 1;
        }
        else {
            first = mid + 1;
        }
    }
    return - 1;
}

//native approach

function calc() {
    for(let i = 0; i < a.length; i++) {
        for(let j = i + 1; j< a.length; j++ ) {
            if(a[i] + a[j] === sum) {
                return [a[i], a[j]]
            }
        }
    }
    return []
}

// console.log(calc())
// console.log(binarySearch([10, 20, 40, 50, 60, 100], 40))

// using binary search 

function calcWithBinary() {
    for(let i = 0; i < a.length; i++) {
        if(a[i] >= sum) {
            return;
        } 

        let need = sum - a[i];
        let seachIndex = binarySearch(a.slice(i), need);
        if(seachIndex != -1) {
            return [a[i], a[seachIndex + i]]
        }
    }
    return []
}

// console.log(calcWithBinary())

function solved() {
    let obj = {};

    for(let item of a) {
        if(obj[item]) {
            return true;
        }
        obj[sum - item] = item;
    }
    return false;
}


console.log(solved())