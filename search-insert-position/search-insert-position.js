/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        var high = nums.length - 1, low = 0;
    if(target > nums[high])return high + 1;
    if(target <= nums[low])return 0
    
    while(high >= low){
        var i = parseInt((high + low)/2);
        if(nums[i] == target)return i
        else if(target >= nums[i])low = i + 1;
        else high = i - 1;
    }
    return low
};