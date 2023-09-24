/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     return [nums.indexOf(target), nums.lastIndexOf(target)]
// };

var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let res = 0, contains = false;
    while(l <= r){
        let m = l + Math.floor((r - l) / 2);
        if(target == nums[m]){
            contains = true;
            res = m;
        } 
        if(target < nums[m]){
            r = m - 1;
        } else l = m + 1;
    }
    if(contains){
        let i = res, j = res;
        while(nums[i - 1] == target) i--;
        while(nums[j + 1] == target) j++;
        return [i, j]
    }   return [-1, -1] 
};