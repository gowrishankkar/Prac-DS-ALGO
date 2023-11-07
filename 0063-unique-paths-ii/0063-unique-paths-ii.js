/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid[0].length, n = obstacleGrid.length
    if (obstacleGrid[n - 1][m - 1] == 1 || obstacleGrid[0][0] == 1) return 0
    let board = new Array(m).fill(0)
    for (let r = n - 1; r >= 0; r--) {
        for (let c = m - 1; c >= 0; c--) {
            if (!obstacleGrid[r][c]) {
                let right = c + 1 == m ? 0 : board[c + 1]
                let down = board[c]
                if (c == m - 1 && r == n - 1) board[c] = 1
                else board[c] = right + down
            } else board[c] = 0
        }
    }
    return board[0]
};
