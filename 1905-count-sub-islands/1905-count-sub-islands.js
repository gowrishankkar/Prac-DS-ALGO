/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
// var countSubIslands = function (grid1, grid2) {
//   const rows = grid2.length;
//   const cols = grid2[0].length;
//   const directions = [-1, 0, 1, 0, -1];
//   let result = 0;

//   const dfs = (row, col) => {
//     if (grid1[row][col] === 0) return false;
//     let isValid = true;
//     grid2[row][col] = 0;
//     grid1[row][col] = 0;
//     for (let i = 0; i < 4; i++) {
//       const newRow = row + directions[i];
//       const newCol = col + directions[i + 1];
//       if (newRow >= 0 && newCol >= 0
//         && newRow < rows && newCol < cols
//         && grid2[newRow][newCol] === 1)
//         isValid &= dfs(newRow, newCol);
//     }

//     return isValid;
//   }

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (grid2[r][c] === 1 && dfs(r, c)) result += 1;
//     }
//   }
//   return result;
// };

var countSubIslands = function(grid1, grid2) {
    if (grid1.length === 0) return 0;
    const n = grid1.length, m = grid1[0].length;
    let result = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const count = (x0, y0) => {
        if(grid1[x0][y0] == 0) return false;
        grid1[x0][y0] = 0;
        grid2[x0][y0] = 0;
        let isValid = true;
        for (const [dx, dy] of directions) {
            const x = x0 + dx;
            const y = y0 + dy;
            if (x < n && x >= 0 && y < m && y >= 0 && grid2[x][y] === 1) {
                 isValid &= count(x, y);
            }
        }
        return isValid;
    }
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (grid2[x][y] === 1 && count(x, y)) {
                result++;
            }
        }
    }
    return result;
};
