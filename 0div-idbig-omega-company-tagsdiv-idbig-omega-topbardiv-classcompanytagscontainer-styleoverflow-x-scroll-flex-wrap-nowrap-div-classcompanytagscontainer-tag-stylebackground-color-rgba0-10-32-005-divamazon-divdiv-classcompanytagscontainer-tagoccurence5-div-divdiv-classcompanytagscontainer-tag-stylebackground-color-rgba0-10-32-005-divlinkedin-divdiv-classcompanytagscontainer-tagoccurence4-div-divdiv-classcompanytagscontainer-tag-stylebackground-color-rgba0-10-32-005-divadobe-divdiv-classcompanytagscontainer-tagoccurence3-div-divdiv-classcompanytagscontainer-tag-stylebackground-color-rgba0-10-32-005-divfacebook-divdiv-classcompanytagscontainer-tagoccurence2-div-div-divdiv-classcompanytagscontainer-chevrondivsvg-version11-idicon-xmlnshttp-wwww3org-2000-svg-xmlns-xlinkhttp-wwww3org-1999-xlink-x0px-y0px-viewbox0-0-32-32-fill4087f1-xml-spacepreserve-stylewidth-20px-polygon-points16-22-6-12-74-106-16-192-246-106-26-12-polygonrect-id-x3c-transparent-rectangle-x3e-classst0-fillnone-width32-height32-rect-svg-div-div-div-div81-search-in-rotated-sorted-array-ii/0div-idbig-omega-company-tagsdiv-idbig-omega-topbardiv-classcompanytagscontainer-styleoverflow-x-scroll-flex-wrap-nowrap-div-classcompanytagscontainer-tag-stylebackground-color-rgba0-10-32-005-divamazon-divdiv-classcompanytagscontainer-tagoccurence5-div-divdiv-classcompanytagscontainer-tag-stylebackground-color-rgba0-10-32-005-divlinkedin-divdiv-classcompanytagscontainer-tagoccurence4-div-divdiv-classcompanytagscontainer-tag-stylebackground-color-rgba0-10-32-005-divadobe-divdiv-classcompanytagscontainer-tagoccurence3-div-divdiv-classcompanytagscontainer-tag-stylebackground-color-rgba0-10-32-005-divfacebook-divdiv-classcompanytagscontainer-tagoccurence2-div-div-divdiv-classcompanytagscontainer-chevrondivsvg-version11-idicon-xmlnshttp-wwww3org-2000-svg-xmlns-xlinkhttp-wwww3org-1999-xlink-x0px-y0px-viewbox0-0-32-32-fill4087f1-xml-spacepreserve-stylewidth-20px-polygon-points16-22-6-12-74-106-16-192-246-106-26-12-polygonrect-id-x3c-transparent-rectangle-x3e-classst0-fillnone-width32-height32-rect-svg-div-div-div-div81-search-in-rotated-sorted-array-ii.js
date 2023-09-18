/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// var search = function(nums, target) {
//     if(nums.length < 1) {
//         return false;
//     }
    
//     if(nums.length < 2) {
//         return nums[0] === target;
//     }
    
//     let [l, h] = [0, nums.length-1];
//     while(l <= h) {
//         const m = Math.trunc((l+h)/2);
//         if(nums[m] === target) {
//             return true;
//         }
        
//         if(nums[m] === nums[l]) {
//             l++;
//             continue;
//         }
        
//         const pInFirstHalf = nums[l] <= nums[m];
//         const tInFirstHalf = nums[l] <= target;
//         if(pInFirstHalf ^ tInFirstHalf) {
//             if(pInFirstHalf) {
//                 l = m+1;
//             } else {
//                 h = m-1;
//             }
//         } else {
//             if(nums[m] < target) {
//                 l = m+1;
//             } else {
//                 h = m-1;
//             }
//         }
//     }
//     return false;
// };

var search = function(nums, target) {
    return nums.includes(target)
};