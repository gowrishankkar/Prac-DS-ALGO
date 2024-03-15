/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2) {
//     const n = text1.length;
//     const m = text2.length;
//     let dp = Array.from({length : n}, () => Array(m).fill(-1));
//     function lcs(ind1, ind2) {
//         if(ind1 < 0 || ind2 < 0) return 0;
//         if(dp[ind1][ind2] !== - 1) return dp[ind1][ind2];
//         if(text1[ind1] === text2[ind2]){
//             return dp[ind1][ind2] = 1 + lcs(ind1 - 1 , ind2 - 1);
//         } else {
//             return dp[ind1][ind2] = Math.max(lcs(ind1 - 1, ind2), lcs(ind1, ind2 - 1))
//         }
//     }
//     return lcs(n - 1, m - 1);
// };



// var longestCommonSubsequence = function(text1, text2) {
//     const n = text1.length;
//     const m = text2.length;
//     const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
//     for (let i = 0; i <= n; i++) {
//         dp[i][0] = 0;
//     }
//     for (let i = 0; i <= m; i++) {
//         dp[0][i] = 0;
//     }
//     for (let ind1 = 1; ind1 <= n; ind1++) {
//         for (let ind2 = 1; ind2 <= m; ind2++) {
//             if (text1[ind1 - 1] === text2[ind2 - 1]) {
//                 dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
//             } else {
//                 dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
//             }
//         }
//     }

//         return dp[n][m];
// };



var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    let prev = new Array(m + 1).fill(0);
    let cur = new Array(m + 1).fill(0);
    for (let ind1 = 1; ind1 <= n; ind1++) {
        for (let ind2 = 1; ind2 <= m; ind2++) {
            if (text1[ind1 - 1] === text2[ind2 - 1]) {
                cur[ind2] = 1 + prev[ind2 - 1];
            } else {
                cur[ind2] = Math.max(prev[ind2], cur[ind2 - 1]);
            }
        }
        // Update 'prev' with the values of 'cur' for the next iteration
        prev = [...cur];
    }

        return prev[m];
};

