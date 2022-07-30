/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let n = grid.length;
    let m = grid[0].length
    let count = 0
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
            if(grid[i][j] < 0) count++
            // console.log(grid[i][j])
        }
    }
  return count;
};