/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let c = 0;
    let ele;
    for(let i = 0; i < nums.length; i++){
        if(c === 0){
            c = 1;
            ele = nums[i]
        } else if(nums[i] === ele){
            c++;
        } else {
            c--
        }
    }
    
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === ele) count++
    }
    if(count > nums.length / 2) return ele;
    return -1; 
};