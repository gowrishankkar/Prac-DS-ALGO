/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    currentSum = 0;
    for(let i = 0; i<nums.length; i++){
        currentSum += nums[i];
        result.push(currentSum);
    }
    return result;
    
};