var minFallingPathSum = function (grid) {
    // Lets get the size of the grid
    let n = grid.length;
    // Initialize the result with positive infinity
    let res = Infinity;
    // Lets initialize a 2D array
    let dp = new Array(n).fill().map(() => new Array(n).fill(-1));

    // Lets Initialize the first row of the DP arraywith the value from gthe grid
    for (let j = 0; j < n; ++j) {
        dp[0][j] = grid[0][j];
    }

    // Iterate over the rows of the grid
    for (let i = 1; i < n; ++i) {
        // Iterate over the columns of the grid
        for (let j = 0; j < n; ++j) {
            // Lets Initialize temporary variable
            let temp = Infinity;

            // Iterate over the previous row to find the minimum sum
            for (let k = 0; k < n; ++k) {
                if (j !== k) { // exclude the current column
                    temp = Math.min(temp, grid[i][j] + dp[i - 1][k]); // update temp with minimum sum
                }
            }
            dp[i][j] = temp; // store the minimum sum for the current cell
        }
    }
    // Iterate over the last row of the DP array to find the min sum
    for (let j = 0; j < n; ++j) {
        res = Math.min(res, dp[n - 1][j]); // Update the result with the max sum
    }
    return res; // Return min falling Path sum
}