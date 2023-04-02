function sortme(arr) {
    console.log(arr);
    for(let i = 0; i< arr.length; i++) {
        let smallIdx = i;
        for(let j = i + 1; j< arr.length; j++) {
            if(arr[smallIdx] > arr[j]) {
                smallIdx = j;
            }
        }  
    let temp = arr[i];
    arr[i] = arr[smallIdx];
    arr[smallIdx] = temp;
} 
    console.log(arr);
}

sortme([8, 3, 2, 5, 7, 6, 1]);