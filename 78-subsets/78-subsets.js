/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const track = [];
    
    const backtrack = (nums, start) => {
        res.push(track.slice());
        for(let i = start; i < nums.length; i++){
            track.push(nums[i]);
            backtrack(nums, i+1);
            track.pop();
        }
    } 
    
    backtrack(nums, 0)
    return res;
};