/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let l = 0;
    let r = nums.length -1;
    let result = []
    while(l <= r){
        if(nums[l] * nums[l] > nums[r] * nums[r]){
            result.push(nums[l] * nums[l])
            l++;
        } else {
             result.push(nums[r] * nums[r])
            r--;
        }
    }
    
    // console.log(result, 'result')
    return result.reverse()
};