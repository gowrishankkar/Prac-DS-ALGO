/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxValue = nums[0];
    let currentSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i])
        if(currentSum < 0){
            currentSum = 0;
        }
        currentSum = currentSum + nums[i]  
         maxValue = Math.max(maxValue, currentSum)
        
    }
    console.log('maxValue', maxValue)
    
    return maxValue;
    
};