/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
        let sorted = nums.sort((a, b) => a - b);
        let i = 0;
        let ans = [];
        while (i < nums.length) {
            if (sorted[i] === sorted[i + 1]) {
                i = i + 2;
            } else {
                ans.push(sorted[i]);
                i++;
            }
        }

        return ans.sort((a, b) => a - b);
    
};