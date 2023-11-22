/**
 * @param {number[][]} grid
 * @return {number}
 */
const Check = (G, i, j) => {
  if (i < 0 || i >= G.length || j < 0 || j >= G[0].length || G[i][j] !== 1) {
    return;
  }

  G[i][j] = 0;

  // Right
  Check(G, i, j + 1);
  // Down
  Check(G, i + 1, j);
  // Left
  Check(G, i, j - 1);
  // Up
  Check(G, i - 1, j);
};

var numEnclaves = function(grid) {
  let top = 0;
  let bottom = grid.length - 1;
  let left = 0;
  let right = grid[0].length - 1;

  for (let i = 0; i <= right; i++) {
    Check(grid, 0, i);
  }
  top++;

  for (let i = top; i <= bottom; i++) {
    Check(grid, i, right);
  }
  right--;

  for (let i = right; i >= left; i--) {
    Check(grid, bottom, i);
  }
  bottom--;

  for (let i = bottom; i >= top; i--) {
    Check(grid, i, left);
  }
  left++;

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }

  return count;
};