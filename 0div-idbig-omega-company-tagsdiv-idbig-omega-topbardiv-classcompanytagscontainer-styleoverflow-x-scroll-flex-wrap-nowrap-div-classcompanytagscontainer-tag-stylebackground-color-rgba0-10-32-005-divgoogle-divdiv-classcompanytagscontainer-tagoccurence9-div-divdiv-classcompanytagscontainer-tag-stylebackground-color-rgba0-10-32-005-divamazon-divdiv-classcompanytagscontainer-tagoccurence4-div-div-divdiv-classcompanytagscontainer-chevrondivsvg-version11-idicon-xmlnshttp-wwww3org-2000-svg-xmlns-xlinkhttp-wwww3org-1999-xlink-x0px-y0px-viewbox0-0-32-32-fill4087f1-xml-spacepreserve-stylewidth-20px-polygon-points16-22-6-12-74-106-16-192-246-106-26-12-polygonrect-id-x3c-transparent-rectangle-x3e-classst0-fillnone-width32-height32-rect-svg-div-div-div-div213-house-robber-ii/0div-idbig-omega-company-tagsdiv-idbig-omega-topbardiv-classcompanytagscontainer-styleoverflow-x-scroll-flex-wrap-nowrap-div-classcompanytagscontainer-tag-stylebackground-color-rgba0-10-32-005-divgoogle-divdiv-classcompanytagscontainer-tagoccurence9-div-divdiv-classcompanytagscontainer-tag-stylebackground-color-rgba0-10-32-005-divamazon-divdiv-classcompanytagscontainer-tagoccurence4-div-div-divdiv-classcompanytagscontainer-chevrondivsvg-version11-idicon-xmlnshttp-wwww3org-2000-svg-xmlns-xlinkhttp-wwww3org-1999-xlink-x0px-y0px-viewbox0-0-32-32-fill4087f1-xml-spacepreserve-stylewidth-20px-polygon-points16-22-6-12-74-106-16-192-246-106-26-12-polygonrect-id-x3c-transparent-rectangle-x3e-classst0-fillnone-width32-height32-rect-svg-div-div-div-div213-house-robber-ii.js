/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    
    var rob1 = (arr) => {
        function solveUtil(n, arr, dp) {
            dp[0] = arr[0];
            for (let i = 1; i < n; i++) {
                let pick = arr[i];
                if (i > 1) {
                    pick += dp[i - 2];
                }
                const nonPick = dp[i - 1];
                dp[i] = Math.max(pick, nonPick);
            }
            return dp[n - 1];
        }
        const dp = new Array(arr.length).fill(-1);
        return solveUtil(arr.length, arr, dp);
    };
    
    
    const arr1 = [];
    const arr2 = [];
    const n = nums.length
    if (n === 1) {
        return nums[0];
    }
    
    for (let i = 0; i < n; i++) {
        if (i !== 0) arr1.push(nums[i]);
        if (i !== n - 1) arr2.push(nums[i]);
    }
    const ans1 = rob1(arr1);
    const ans2 = rob1(arr2);
    
    return Math.max(ans1, ans2);
    
};