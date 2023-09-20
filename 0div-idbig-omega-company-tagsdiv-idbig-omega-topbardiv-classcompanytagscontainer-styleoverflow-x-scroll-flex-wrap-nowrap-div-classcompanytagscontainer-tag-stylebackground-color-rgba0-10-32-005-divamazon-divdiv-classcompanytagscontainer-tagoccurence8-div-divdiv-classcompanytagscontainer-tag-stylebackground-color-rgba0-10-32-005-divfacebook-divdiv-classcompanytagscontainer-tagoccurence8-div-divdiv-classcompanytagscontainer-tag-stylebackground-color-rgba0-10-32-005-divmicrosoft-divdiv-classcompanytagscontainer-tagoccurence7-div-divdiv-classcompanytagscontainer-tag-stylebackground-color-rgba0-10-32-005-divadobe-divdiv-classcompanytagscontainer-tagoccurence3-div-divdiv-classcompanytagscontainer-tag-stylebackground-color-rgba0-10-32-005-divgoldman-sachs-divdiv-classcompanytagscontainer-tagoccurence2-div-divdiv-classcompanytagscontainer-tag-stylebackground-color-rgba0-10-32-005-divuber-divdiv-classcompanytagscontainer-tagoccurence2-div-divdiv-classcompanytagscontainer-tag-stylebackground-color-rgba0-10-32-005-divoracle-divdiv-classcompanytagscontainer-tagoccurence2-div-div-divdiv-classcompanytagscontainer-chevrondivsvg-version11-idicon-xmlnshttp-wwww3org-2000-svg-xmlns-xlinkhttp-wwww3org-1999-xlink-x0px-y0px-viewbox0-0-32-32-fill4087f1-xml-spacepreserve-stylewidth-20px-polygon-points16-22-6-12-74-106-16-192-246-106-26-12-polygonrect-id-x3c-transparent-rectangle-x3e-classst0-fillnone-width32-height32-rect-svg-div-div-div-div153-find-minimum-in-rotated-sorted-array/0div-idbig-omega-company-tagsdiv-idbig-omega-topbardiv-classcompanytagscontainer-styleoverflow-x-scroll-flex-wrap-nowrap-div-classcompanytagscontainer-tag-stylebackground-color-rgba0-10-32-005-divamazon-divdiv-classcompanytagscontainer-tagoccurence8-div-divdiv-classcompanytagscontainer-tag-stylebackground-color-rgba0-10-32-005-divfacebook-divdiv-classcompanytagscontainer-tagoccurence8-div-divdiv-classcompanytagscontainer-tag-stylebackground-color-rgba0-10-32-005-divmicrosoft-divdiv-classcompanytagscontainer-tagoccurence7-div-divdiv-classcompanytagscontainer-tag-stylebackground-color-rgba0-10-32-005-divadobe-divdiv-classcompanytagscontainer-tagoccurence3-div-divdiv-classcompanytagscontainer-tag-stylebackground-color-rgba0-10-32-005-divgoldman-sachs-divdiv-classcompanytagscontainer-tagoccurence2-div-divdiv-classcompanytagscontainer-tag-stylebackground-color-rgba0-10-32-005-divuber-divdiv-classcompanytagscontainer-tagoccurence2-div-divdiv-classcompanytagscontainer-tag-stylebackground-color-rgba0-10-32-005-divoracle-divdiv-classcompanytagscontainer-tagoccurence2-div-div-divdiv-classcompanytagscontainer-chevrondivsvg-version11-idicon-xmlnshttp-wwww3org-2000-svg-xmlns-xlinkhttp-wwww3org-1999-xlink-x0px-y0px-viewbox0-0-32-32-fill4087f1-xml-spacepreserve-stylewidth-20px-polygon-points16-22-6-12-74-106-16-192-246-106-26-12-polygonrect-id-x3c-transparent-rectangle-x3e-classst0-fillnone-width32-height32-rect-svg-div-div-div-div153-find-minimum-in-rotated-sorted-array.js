/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//     let [left, right] = [0, nums.length - 1];

//     while (left < right) {
//         const mid = (left + right) >> 1;
//         const guess = nums[mid];
//         const [leftNum, rightNum] = [nums[left], nums[right]];

//         const isTarget = leftNum < rightNum;
//         if (isTarget) return leftNum;

//         const isTargetGreater = leftNum <= guess;
//         if (isTargetGreater) left = mid + 1;

//         const isTargetLess = guess < leftNum;
//         if (isTargetLess) right = mid;
//     }

//     return nums[left];
// };


var findMin = function (nums) {
    let [left, right] = [0, nums.length - 1];

    let res = Number.MAX_VALUE
    while(left <= right){
        let mid  = Math.floor((left + right) / 2);
        if(nums[left] <= nums[right]){
            res = Math.min(res, nums[left]); 
            break;
        }
        if(nums[left] <= nums[mid]){
            left = mid + 1; 
             res = Math.min(res, nums[left]); 
        }else {
             right = mid ; 
             res = Math.min(res, nums[right]); 
        }
    }
    return res;
};