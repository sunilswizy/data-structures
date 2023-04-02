
function sortMe(arr) {
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log(arr)

}

sortMe([8, 3, 2, 5, 7, 6, 1]);
