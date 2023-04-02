
function sortMe(arr) {
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {

        let keyItem = arr[i]

        for(let j = i - 1; j >= 0; j--) { 
            if(arr[j] > keyItem) {
                let temp = arr[j+1];
                keyItem = temp;
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            else {
                break;
            }
        }
    }
    console.log(arr);
}


sortMe([8, 3, 2, 5, 7, 6, 1]);
