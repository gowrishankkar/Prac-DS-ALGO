/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ex = false;
    for(let i=1; i<nums.length-1; ++i) {
        if(nums[i-1]+nums[i+1]===2*nums[i]) {
            ex = true;
            const temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
    }
    if(ex) {
        return rearrangeArray(nums);
    }
    return nums;
};