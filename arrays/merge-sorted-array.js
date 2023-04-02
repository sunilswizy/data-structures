const arr1 = [12];
const arr2 = [10];

function mergeSortedArray() {
    const mergedArray = [];
    let item1 = arr1[0];
    let item2 = arr2[0];
    let i = 1;
    let j = 1;

    while(item1 || item2) {
        if(item1 < item2) {
            mergedArray.push(item1);
            item1 = arr1[i];
            i++;
        }
        else {
            mergedArray.push(item2);
            item2 = arr2[j];
            j++;
        }
    }
    
    return mergedArray;
}

console.log(mergeSortedArray())