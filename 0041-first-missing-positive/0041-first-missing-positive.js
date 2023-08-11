/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
        
    for(let i = 0; i< nums.length; i++){
        let curr = nums[i] - 1;
        while(nums[i] > 0 && nums[i] < nums.length && nums[i] != nums[curr]){
            [nums[curr], nums[i]] = [nums[i], nums[curr]];
            curr = nums[i] - 1;
        }
    }
    console.log('nums', nums)
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != i + 1 ){
            return i + 1;
        }
    }
    return nums.length + 1;

};