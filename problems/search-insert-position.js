let searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(nums[middle] === target) {
            return middle;
        }
        else if(nums[middle] > target) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }

        console.log(start, end, middle)

    }

    // if(nums[start]) {
    //     return start
    // }
    // else {
    //     return end;
    // }

    // console.log(start, end)
    return end + 1;

};

console.log(searchInsert([1,3 ] , 2))
