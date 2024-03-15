/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    function getMin(i , j, dp){
        if(i == 0 && j == 0) return grid[0][0];
        if( i < 0 || j < 0) return Infinity;
        if(dp[i][j] !== -1) return dp[i][j];
        let left = grid[i][j] + getMin(i - 1 , j, dp);
        let right = grid[i][j] + getMin(i , j - 1, dp);
        return dp[i][j] = Math.min(left, right)
    }
    let n = grid.length, m = grid[0].length;
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

    return getMin(n - 1, m - 1, dp)
};