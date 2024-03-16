/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(arr) {
        const n = arr.length;

    // Create a 2D dp array filled with -1 to store computed results
    const dp = new Array(n).fill().map(() => new Array(n + 1).fill(-1));

    // Call the recursive function to compute the length of the longest increasing subsequence
    return getAns(arr, n, 0, -1, dp);
};

function getAns(arr, n, ind, prevIndex, dp) {
     if (ind === n) return 0;
     if (dp[ind][prevIndex + 1] !== -1) return dp[ind][prevIndex + 1];
     let notTake = 0 + getAns(arr, n, ind + 1, prevIndex, dp);
    let take = 0;
    if (prevIndex === -1 || arr[ind] > arr[prevIndex]) {
        take = 1 + getAns(arr, n, ind + 1, ind, dp);
    }
      dp[ind][prevIndex + 1] = Math.max(notTake, take);
    return dp[ind][prevIndex + 1];
}