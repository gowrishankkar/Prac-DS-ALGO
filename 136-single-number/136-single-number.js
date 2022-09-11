/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //    nums.sort();
    // for (var i = 0; i < nums.length; i += 2) {
    //     if (nums[i] != nums[i + 1]) {
    //         return nums[i];
    //     }
    // }
    
     let res = nums[0];

        for (let i = 1; i < nums.length; i++)

            res = res ^ nums[i];



        return parseInt(res);
};