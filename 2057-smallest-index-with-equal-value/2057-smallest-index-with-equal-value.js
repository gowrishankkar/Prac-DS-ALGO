/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    // let result = [];
    for (i = 0; i < nums.length; i++) {
       if(i%10 == nums[i]) return i
        
    }
    return -1
    // console.log('result', result)
    
    // return result.length > 0 ? result[0] : -1
    
};