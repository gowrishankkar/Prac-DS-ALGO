/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// var minDistance = function(word1, word2) {
//     const n = word1.length;
//     const m = word2.length;

//     // Create a 2D array to store dynamic programming values
//     const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

//     // Call the recursive utility function
//     return getDist(word1, word2, n - 1, m - 1, dp);
// };

// function getDist(s1, s2, i, j, dp){
//      if (i < 0) {
//         return j + 1;
//     }
//     if (j < 0) {
//         return i + 1;
//     }
//     if (dp[i][j] !== -1) {
//         return dp[i][j];
//     }
//     if (s1[i] === s2[j]) {
//         return dp[i][j] = getDist(s1, s2, i - 1, j - 1, dp);
//     }
//      return (dp[i][j] = 1 + Math.min(
//         getDist(s1, s2, i - 1, j - 1, dp),
//         getDist(s1, s2, i - 1, j, dp),
//         getDist(s1, s2, i, j - 1, dp)
        
//     ));

// }


var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;

    // Create a 2D array to store dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

    // Call the recursive utility function
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
             if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                 (dp[i][j] = 1 + Math.min(
               dp[i - 1][j - 1],
                dp[i - 1][j],
               dp[i][j - 1]

            ));   
            }
            
        }
    }
    return dp[n][m]
};



