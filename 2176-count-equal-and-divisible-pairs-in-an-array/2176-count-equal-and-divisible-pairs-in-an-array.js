/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let result = 0;

    for(let i = 0; i<nums.length-1 ; i++){
         for(let j = i+1; j<nums.length ; j++){
            // max = Math.max((nums[i]-1)*(nums[j]-1), max)
             if(nums[i] == nums[j] && (i*j % k) == 0) result++
        }   
    }
    
    console.log('result', result)
    return result
    
};