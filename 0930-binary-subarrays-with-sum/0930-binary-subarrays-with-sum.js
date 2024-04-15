/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let totalCount = 0;
    for (let l = 0; l < nums.length; l++) {
        let curSum = 0;
        for (let r = l; r < nums.length; r++) {
            curSum += nums[r];

            if(curSum === goal){
                totalCount++;
            }
        }
    }

    return totalCount
};