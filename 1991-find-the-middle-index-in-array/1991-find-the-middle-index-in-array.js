/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    let currentSum = 0
    for(let k =  0; k < nums.length ; k++){
        if(currentSum === sum - nums[k] - currentSum){
            return k
        }
          currentSum += nums[k]
      
    }
    
    return -1
    
    
};