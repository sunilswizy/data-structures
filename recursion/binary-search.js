

function binarySearch(nums, target) {
    return search(nums, target, 0, nums.length)
}   


function search(nums, target, l, r) {
    console.log(l, r)
    if(l <= r) {

        let mid = Math.floor((l + r) / 2);

        if(nums[mid] === target) {
            return true;
        }
        else if(nums[mid] > target) {
            return search(nums, target, l, mid - 1);
        }
        else {
            return search(nums, target, mid + 1, r);
        }
    }

    return false;
}


console.log(binarySearch([10, 20, 30, 40, 50], 30))
