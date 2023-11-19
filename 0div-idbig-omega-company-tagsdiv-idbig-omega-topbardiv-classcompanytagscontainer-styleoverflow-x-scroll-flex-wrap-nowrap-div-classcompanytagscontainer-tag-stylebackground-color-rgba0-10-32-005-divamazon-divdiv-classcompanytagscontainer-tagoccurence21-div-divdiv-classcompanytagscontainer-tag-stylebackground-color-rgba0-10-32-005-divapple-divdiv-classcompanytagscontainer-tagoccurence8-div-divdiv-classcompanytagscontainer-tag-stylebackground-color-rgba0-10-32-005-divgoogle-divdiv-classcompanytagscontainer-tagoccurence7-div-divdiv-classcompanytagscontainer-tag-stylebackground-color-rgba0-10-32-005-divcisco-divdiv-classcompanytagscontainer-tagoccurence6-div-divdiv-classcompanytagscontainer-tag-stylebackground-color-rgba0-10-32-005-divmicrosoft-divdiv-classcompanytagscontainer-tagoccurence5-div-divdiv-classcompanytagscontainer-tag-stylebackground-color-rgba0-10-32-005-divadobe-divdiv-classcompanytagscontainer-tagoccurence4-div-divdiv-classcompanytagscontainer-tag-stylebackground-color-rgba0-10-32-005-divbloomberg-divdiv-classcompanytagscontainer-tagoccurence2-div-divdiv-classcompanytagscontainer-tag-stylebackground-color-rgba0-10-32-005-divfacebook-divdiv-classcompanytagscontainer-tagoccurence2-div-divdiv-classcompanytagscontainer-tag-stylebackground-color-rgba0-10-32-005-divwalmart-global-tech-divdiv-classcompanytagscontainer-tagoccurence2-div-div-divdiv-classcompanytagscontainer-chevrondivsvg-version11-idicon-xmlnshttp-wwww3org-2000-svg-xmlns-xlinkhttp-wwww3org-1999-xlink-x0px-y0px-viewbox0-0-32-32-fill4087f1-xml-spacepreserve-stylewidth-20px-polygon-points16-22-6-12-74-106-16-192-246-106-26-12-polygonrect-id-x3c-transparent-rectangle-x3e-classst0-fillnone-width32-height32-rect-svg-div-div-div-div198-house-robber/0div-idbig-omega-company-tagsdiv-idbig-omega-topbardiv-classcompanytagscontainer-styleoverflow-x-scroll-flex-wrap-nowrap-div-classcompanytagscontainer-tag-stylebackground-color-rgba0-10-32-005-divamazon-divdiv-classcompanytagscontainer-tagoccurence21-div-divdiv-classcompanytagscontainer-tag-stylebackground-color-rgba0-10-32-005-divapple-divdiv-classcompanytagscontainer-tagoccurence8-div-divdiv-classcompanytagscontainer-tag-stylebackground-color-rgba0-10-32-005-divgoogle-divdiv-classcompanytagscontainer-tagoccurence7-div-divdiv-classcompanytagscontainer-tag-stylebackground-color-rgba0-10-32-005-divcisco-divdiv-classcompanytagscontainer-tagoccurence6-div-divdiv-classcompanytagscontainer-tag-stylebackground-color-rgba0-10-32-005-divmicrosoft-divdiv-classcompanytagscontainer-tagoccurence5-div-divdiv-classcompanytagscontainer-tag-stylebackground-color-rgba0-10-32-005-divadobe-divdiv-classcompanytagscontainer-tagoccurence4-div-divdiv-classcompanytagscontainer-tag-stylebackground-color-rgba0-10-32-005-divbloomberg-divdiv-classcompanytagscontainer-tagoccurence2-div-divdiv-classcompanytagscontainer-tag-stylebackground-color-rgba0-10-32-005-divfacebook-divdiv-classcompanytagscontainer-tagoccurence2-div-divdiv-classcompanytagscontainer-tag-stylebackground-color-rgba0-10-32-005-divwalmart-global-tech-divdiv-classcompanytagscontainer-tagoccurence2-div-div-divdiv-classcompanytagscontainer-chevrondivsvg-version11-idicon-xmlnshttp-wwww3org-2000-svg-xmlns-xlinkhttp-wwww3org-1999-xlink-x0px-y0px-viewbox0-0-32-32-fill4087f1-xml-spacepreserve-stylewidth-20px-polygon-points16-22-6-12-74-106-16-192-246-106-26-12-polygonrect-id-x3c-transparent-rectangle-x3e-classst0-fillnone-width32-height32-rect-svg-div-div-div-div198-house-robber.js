/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = (nums) => {
//     if (!nums.length) return 0;

//     let [ left, mid ] = [ 0, 0 ];

//     for (const right of nums) {/* Time O(N) */
//         const temp = mid;
//         const house = left + right;

//         mid = Math.max(mid, house);
//         left = temp;
//     }

//     return mid;
// };


// var rob = (nums) => {
//     if (!nums.length) return 0;

//     const tabu = initTabu(nums);

//     for (let i = 1; i < nums.length; i++) {/* Time O(N) */
//         const right = nums[i];
//         const mid = tabu[i];
//         const left = tabu[i - 1];
//         const house = left + right;

//         tabu[i + 1] = Math.max(mid, house);       /* Space O(N) */
//     }

//     return tabu[nums.length]
// };

// const initTabu = (nums) => {
//     const tabu = Array(nums.length + 1).fill(0);

//     tabu[1] = nums[0];

//     return tabu;
// }





// var rob = (nums) => {
//     const dp = new Array(nums.length).fill(-1);
//     var solveUtil = (ind, arr, dp) => {
//         if (ind === 0) return arr[ind];
//         if (ind < 0 ) return 0;
//         if (dp[ind] !== -1) return dp[ind];
//         const pick = arr[ind] + solveUtil(ind - 2, arr, dp);
//         const nonPick = 0 + solveUtil(ind - 1, arr, dp);
//         dp[ind] = Math.max(pick, nonPick);
//         return dp[ind]
//     }

//     return solveUtil(nums.length - 1, nums, dp);
// };




var rob = (arr) => {
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
