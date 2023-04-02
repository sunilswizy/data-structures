const numbers = [ 0,11 ,99, 44, 2, 0, 10, 12, 9, 2];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left

  let length = array.length;
  let middle = Math.floor(length / 2)
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  console.log("left", left, right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  console.log("merge me", left, right)
  let mergedArray = [];
  let item1 = left[0];
  let item2 = right[0];
  let i = 1;
  let j = 1;

  while((item1 === 0) || ( item1 || item2)) {
    if(item2 === undefined || item1 < item2) {
      mergedArray.push(item1);
      item1 = left[i];
      i++;
    }
    else {
      mergedArray.push(item2);
      item2 = right[j];
      j++;
    }
  }
  console.log("mergedArray", mergedArray)
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log("ans", answer);