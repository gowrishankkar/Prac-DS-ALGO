/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i <nums.length; i++){
        console.log('(nums[i].length)%2', nums[i].toString().length)
        if((nums[i].toString().length)%2 === 0) count++
    }
    return count
};