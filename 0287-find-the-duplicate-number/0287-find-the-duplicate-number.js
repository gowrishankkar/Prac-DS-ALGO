/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | HeapSort Space O(1) | QuickSort Space O(log(N)) */

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) return nums[i];
    }

    return -1;
}