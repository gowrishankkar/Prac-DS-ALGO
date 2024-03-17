/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(arr) {
    const n = arr.length;

    // Initialize two arrays to store the length and count of LIS ending at each index
    const dp = new Array(n).fill(1); // dp[i] stores the length of the LIS ending at index i
    const ct = new Array(n).fill(1); // ct[i] stores the count of LIS ending at index i
 let maxi = 1;
        for (let i = 0; i < n; i++) {
        for (let prevIndex = 0; prevIndex < i; prevIndex++) {
            if (arr[prevIndex] < arr[i] && dp[prevIndex] + 1 > dp[i]) {
                dp[i] = dp[prevIndex] + 1;
                ct[i] = ct[prevIndex]; // Inherit count from the previous index
            } else if (arr[prevIndex] < arr[i] && dp[prevIndex] + 1 === dp[i]) {
                ct[i] += ct[prevIndex]; // Increase count if there are multiple LIS with the same length
            }
        }
        maxi = Math.max(maxi, dp[i]); // Update the maximum LIS length
    }

        let numberOfLIS = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] === maxi) {
            numberOfLIS += ct[i]; // Sum counts of LIS with the maximum length
        }
    }

    return numberOfLIS;
};