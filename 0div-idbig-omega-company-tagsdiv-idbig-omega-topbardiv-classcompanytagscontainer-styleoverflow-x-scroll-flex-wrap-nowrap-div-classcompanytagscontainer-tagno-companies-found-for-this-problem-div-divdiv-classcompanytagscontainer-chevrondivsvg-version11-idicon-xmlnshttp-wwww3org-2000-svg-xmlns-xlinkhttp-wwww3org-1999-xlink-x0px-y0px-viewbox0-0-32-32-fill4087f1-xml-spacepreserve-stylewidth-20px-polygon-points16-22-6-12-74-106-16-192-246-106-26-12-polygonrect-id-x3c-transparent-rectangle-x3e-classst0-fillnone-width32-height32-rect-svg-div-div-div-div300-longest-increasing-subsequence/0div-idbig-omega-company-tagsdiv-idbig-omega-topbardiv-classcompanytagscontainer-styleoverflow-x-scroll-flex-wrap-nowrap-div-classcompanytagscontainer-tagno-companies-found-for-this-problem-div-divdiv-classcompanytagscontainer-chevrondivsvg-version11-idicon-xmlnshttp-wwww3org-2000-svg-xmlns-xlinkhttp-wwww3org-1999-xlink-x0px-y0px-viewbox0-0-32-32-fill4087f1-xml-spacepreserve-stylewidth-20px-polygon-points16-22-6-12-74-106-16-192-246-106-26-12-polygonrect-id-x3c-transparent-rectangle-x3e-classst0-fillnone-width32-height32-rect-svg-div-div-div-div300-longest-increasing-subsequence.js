/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = (nums) => {
    const tabu = initTabu(nums);/*               | Space O(N) */

    linearSearch(nums, tabu);   /* Time O(N * N) | Space O(N)*/

    return Math.max(...tabu);   /* Time O(N) */
};

const initTabu = (nums) => new Array(nums.length).fill(1);

var linearSearch = (nums, tabu) => {
    for (let right = 1; (right < nums.length); right++) {/* Time O(N) */
        for (let left = 0; (left < right); left++) {         /* Time O(N) */
            const canUpdate = nums[left] < nums[right];
            if (!canUpdate) continue;

            const [ _left, _right ] = [ (tabu[left] + 1), tabu[right] ];
            tabu[right] = Math.max(_right, _left);           /* Space O(N) */
        }
    }
}
