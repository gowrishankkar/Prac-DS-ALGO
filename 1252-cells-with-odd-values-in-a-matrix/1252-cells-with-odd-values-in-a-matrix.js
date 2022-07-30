/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
   
    let grid = Array(m).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < indices.length; i += 1) {
        for (let j = 0; j < n; j += 1) {
            grid[indices[i][0]][j] += 1
        }
         for (let k = 0; k < m; k += 1) {
           grid[k][indices[i][1]] += 1
        }
    }
    let oddNumbers = 0;
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if(grid[i][j] % 2 != 0) oddNumbers++
        }
    }
    return oddNumbers;
};