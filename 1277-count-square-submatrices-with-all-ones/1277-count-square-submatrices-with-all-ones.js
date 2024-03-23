/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    
    let n = matrix.length, m = matrix[0].length;
    let dp = new Array(n).fill(null).map(() => new Array(m).fill(0))
    for (let j = 0; j < m; j++) dp[0][j] = matrix[0][j];
    for (let i = 0; i < n; i++) dp[i][0] = matrix[i][0];

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) dp[i][j] = 0;
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += dp[i][j];
        }
    }
    return sum;
};