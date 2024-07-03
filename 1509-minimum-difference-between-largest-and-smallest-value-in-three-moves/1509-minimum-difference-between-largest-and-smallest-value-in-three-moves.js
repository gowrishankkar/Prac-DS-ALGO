/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
/* when the length is shorter than 4, we can always eleminate the difference within 3 moves*/
    if(nums.length <= 4) return 0;
	/* sort the numbers and use a sliding window to figure out the smallest difference assuming we could take out three numbers in total from both ends*/
    const sortedNums = nums.sort((a,b) => a-b);
    const remainder = nums.length - 3;
    let minDifference = Infinity;
    
    for(let i = 0; i <= 3; i++){
        minDifference = Math.min(minDifference, sortedNums[i+remainder-1] - sortedNums[i]);
    }
    
    return minDifference;
};