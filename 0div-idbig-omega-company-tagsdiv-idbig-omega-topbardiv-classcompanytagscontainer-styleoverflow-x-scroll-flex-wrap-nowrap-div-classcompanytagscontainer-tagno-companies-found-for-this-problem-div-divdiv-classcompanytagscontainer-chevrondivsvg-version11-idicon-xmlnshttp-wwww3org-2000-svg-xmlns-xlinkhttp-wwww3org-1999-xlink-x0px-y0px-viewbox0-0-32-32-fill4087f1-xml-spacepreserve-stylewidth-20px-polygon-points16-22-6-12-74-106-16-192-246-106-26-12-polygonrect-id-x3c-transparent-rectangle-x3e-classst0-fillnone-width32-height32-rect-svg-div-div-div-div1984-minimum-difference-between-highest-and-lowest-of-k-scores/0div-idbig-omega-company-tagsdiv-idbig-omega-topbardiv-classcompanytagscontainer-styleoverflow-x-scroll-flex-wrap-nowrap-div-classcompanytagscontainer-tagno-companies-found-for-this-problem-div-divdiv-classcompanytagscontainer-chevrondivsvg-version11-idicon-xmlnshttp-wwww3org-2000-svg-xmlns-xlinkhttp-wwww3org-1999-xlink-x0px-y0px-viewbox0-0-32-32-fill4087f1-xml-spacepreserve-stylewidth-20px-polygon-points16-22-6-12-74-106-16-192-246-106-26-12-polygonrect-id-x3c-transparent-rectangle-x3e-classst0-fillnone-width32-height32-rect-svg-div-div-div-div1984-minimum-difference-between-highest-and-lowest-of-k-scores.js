/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length == 0) return 0
    nums.sort((a, b) => a-b);
    let  i  = 0, j = k - 1;
    let res = Infinity;
    while(j < nums.length){
        res = Math.min(Math.abs(nums[j] - nums[i]), res);
        j++;
        i++
    }
    return res;
}

