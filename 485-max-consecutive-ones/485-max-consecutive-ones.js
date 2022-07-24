/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0, count = 0;
    for(let i = 0; i<nums.length ; i++){
        if(nums[i] === 1){
            count++;
            result = Math.max(result, count)
        } else {
            count = 0
        }
        

    }
    return result;
    console.log('result', result)
};