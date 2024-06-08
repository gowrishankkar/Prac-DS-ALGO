/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
    const seen = { 0: -1 }; // Initialize the object with 0 at index -1.
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        const remainder = runningSum % k;

        if (seen.hasOwnProperty(remainder)) {
            if (i - seen[remainder] > 1) {
                return true; // Found a subarray with a sum multiple of k.
            }
        } else {
            seen[remainder] = i;
        }
    }

    return false; // No valid subarray found.
}