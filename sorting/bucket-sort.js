const numbers = [99, 44, 6, 2, 2, 1, 5, 63, 87, 283, 4, 0];

function BucketSort(arr) {
    let length = arr.length
    let bucket = Array(arr.length).fill().map(() => []);
    for(let i = 0; i < length; i++) {
        let index = Math.floor(arr[i] / (Math.max.apply(Math, arr) + 1) * length);
        bucket[index].push(arr[i]);
    }

    return [].concat(...bucket.map(bucket => bucket.sort((a, b) => a - b)));;
}


console.log(BucketSort(numbers));

// instead of sort can use insertion sort