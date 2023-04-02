let moveZeroes = function(nums) {

    for(let i = nums.length - 1; i >= 0; i--) {
        console.log(i)
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
};


let moveZeroes2 = function(nums) {
    for(let i =0, j = 0; i < nums.length;) {
        if(nums[i] === 0) i++;
        else {
           let temp = nums[i]
           nums[i] = nums[j]
           nums[j] = temp;
           
           i++;
           j++;
        }
    }

    return nums;
}

console.log(moveZeroes2([0,1,0,3,12]));