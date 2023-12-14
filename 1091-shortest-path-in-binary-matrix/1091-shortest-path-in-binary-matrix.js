/**
 * @param {number[][]} grid
 * @return {number}
 */
// var shortestPathBinaryMatrix = function(grid) {
//     let n = grid.length - 1;
//     const dir = [[-1,-1], [-1, 0], [-1, 1], [0, -1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
//     if(grid[0][0] === 1 || grid[n][n] === 1) return -1;
//     if(n === 0) return 1;
//     grid[0][0] = -1;
//     let q = [];
//     q.push([0, 0]);
//     while(q.length){
//         let new
//     }
    
// };




const dir = [
  [-1,-1], [0,-1], [1,-1],
  [-1,0], [1,0],
  [-1,1], [0,1], [1,1],
]

var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length - 1;
  if (grid[n][n] === 1 || grid[0][0] === 1) return -1;
  const stack = [[0,0,1]];
  grid[0][0] = 1;
  while (stack.length) {
    const [r, c, d] = stack.shift();
    if (r === n && c === n) return d;
    dir.forEach((mov) => {
      const i = r + mov[0];
      const j = c + mov[1];
      if (grid[i]?.[j] === 0) {
        stack.push([i, j, d + 1])
        grid[i][j] = 1;
      }
    })
  }

  return -1;    
};
