/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let maxVal = 0;
   let minVal = 0;

   for (let i = nums.length - 1; i >= 0; i--) {
      minVal = Math.min(minVal, nums[i] - maxVal);
      maxVal = Math.max(maxVal, nums[i] - minVal);   
   }

   return maxVal
};