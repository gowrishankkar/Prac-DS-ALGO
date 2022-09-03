/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let res = 0;
    let min = Math.min(...nums);
    for(let num of nums){
        res += num - min;
    }
    return res;
};