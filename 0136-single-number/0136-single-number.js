/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res ;
    for(let i = 0; i < nums.length; i++){
        res = res ^ nums[i];
    }
    return res;
};