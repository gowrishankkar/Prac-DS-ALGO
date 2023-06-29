/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
        let left = 0;
    let right = 0;
    let longest = 0;

    while (right < nums.length) {
        if (nums[right] === 1) {
            longest = Math.max(longest, right - left + 1);
        } else {
            left = right + 1;
        }
        right++;
    }

    return longest; 
};