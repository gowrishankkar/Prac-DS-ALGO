/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // let arr = [1,6,7,5,2,4,10,6,4]
    console.log('nums', nums.sort((a,b) => a-b))
    let result = 0;
    let length = nums.length;
    console.log('length', length)
    result = (nums[length-1] * nums[length-2]) - (nums[0] * nums[1])
    console.log('result', result)
    return result;
    
};