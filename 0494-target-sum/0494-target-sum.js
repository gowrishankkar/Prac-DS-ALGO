/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = (nums, target, index = 0, sum = 0) => {
    const isBaseCase = (index === nums.length);
    if (isBaseCase) {
        const isTarget = (sum === target);
        if (isTarget) return 1;

        return 0;
    }

    return dfs(nums, target, index, sum);/* Time O(2^N) | Space O(HEIGHT) */
}

var dfs = (nums, target, index, sum) => {
    const left = findTargetSumWays(nums, target, (index + 1), (sum + nums[index])); /* Time O(2^N) | Space O(HEIGHT) */
    const right = findTargetSumWays(nums, target, (index + 1), (sum - nums[index]));/* Time O(2^N) | Space O(HEIGHT) */

    return (left + right);
}