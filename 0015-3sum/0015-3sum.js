/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//    var len = nums.length;
//   var res = [];
//   var l = 0;
//   var r = 0;
//   nums.sort((a, b) => (a - b));
//   for (var i = 0; i < len; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     l = i + 1;
//     r = len - 1;
//     while (l < r) {
//       if (nums[i] + nums[l] + nums[r] < 0) {
//         l++;
//       } else if (nums[i] + nums[l] + nums[r] > 0) {
//         r--;
//       } else {
//         res.push([nums[i], nums[l], nums[r]]);
//         while (l < r && nums[l] === nums[l + 1]) l++;
//         while (l < r && nums[r] === nums[r - 1]) r--;
//         l++;
//         r--;
//       }
//     }
//   }
//   return res;
// };



/**
 * https://leetcode.com/problems/3sum/
 * Time O(N ^ 2) | Space O(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, sums = []) {
    nums.sort((a, b) => a - b);

    for (let first = 0; first < nums.length - 2; first++) {
        if (isPrevDuplicate(nums, first)) continue;

        const [target, left, right] = [
            -nums[first],
            first + 1,
            nums.length - 1,
        ];

        search(nums, target, left, right, sums);
    }

    return sums;
};

const isPrevDuplicate = (nums, index) => nums[index - 1] === nums[index];

const isNextDuplicate = (nums, index) => nums[index] === nums[index + 1];

const search = (nums, target, left, right, sums) => {
    while (left < right) {
        const [leftVal, rightVal] = [nums[left], nums[right]];
        const sum = leftVal + rightVal;

        const isTarget = sum === target;
        if (isTarget) {
            sums.push([-target, leftVal, rightVal]);
            left++;
            right--;

            while (left < right && isPrevDuplicate(nums, left)) left++;
            while (left < right && isNextDuplicate(nums, right)) right--;

            continue;
        }

        const isTargetGreater = sum < target;
        if (isTargetGreater) left++;

        const isTargetLess = target < sum;
        if (isTargetLess) right--;
    }
};