/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
   let sum = 0;
    for (let i=0; i<nums.length; i++) {
        let max = nums[i];
        let min = nums[i];
        for (let j=i+1; j<nums.length; j++) {
            const lastVal = nums[j];
            max = Math.max(max, lastVal);
            min = Math.min(min, lastVal);
            sum += max - min;
        }
    }

    return sum;
};