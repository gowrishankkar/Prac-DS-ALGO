/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let preF = 0;
    let min = 0;
    for(let i = 0; i < nums.length ; i++){
        preF += nums[i];
        min = Math.min(min, preF)
  
        
        
    }
    return min < 0 ? Math.abs(min) + 1 : 1
};