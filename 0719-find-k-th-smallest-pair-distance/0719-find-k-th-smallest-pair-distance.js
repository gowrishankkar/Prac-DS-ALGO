/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    // Implementing Binary serach to find minimum possible diff
    let left = 0;
    let right = nums[nums.length - 1] - nums[0];
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let j = 0;
        // count when difference <= mid
        for (let i = 0; i < nums.length; i++) {
            while (nums[i] - nums[j] > mid) {
                j++;
            }
            count += i - j;
        }
        // Adjust search range
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};