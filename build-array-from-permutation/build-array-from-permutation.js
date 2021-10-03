/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    ans = nums.map((i)=>{
       return nums[i]
            })
    
    console.log(ans)
    return ans;
};