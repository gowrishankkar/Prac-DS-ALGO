/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     if(nums.length == 1) return nums[0];
//     let dp = [];
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);
//     for(let i=2; i < nums.length; i++) {
//         dp[i] =  Math.max(nums[i] + dp[i-2], dp[i-1]);
//     }
//     return dp[dp.length-1]
// };

var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1) ; 
    // Call the solveUtil function with the last index
    return solveUtil(n - 1, nums, dp);
};


function solveUtil(ind, arr, dp) {

    // Base cases
    if (ind === 0) return arr[ind];
    if (ind < 0) return 0;
        // Check if the result for this index is already calculated
    if (dp[ind] !== -1) return dp[ind];


    // Calculate the maximum value by either picking or not picking the current element
    const pick = arr[ind] + solveUtil(ind - 2, arr, dp);
    const nonPick = 0 + solveUtil(ind - 1, arr, dp);

    // Store the result in the DP array and return it
    return (dp[ind] = Math.max(pick, nonPick));
}
