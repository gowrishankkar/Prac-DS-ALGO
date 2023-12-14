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




const movs = [
  [-1,-1], [0,-1], [1,-1],
  [-1,0], [1,0],
  [-1,1], [0,1], [1,1],
]

var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length - 1;
  if (grid[n][n] === 1 || grid[0][0] === 1) return -1;

  const stack = [{ coord: [0,0], count: 1 }];
  grid[0][0] = 1;

  while (stack.length) {
    const { coord, count } = stack.shift();
    if (coord[0] === n && coord[1] === n) return count;

    movs.forEach((mov) => {
      const i = coord[0] + mov[0];
      const j = coord[1] + mov[1];

      if (grid[i]?.[j] === 0) {
        stack.push({ coord: [i,j], count: count + 1 })
        grid[i][j] = 1;
      }
    })
  }

  return -1;    
};
