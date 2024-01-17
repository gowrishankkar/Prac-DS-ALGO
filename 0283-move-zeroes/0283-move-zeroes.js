/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    // Fill the remaining elements with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};