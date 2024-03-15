/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
    
//     function test(i, j){
//         if(i == 0 && j == 0 ) return 1;
//         if(i < 0 || j < 0 ) return 0;
//         if(dp[i][j] !== -1) return dp[i][j]; 
//         let up = test(i - 1, j, dp);
//         let left  = test(i, j - 1, dp);
//         return dp[i][j] = left + up;
//     }
//     // let dp = new Array(m).fill(null).map(()=>Array(81).fill('q'))
//         let dp = new Array(m).fill(-1).map(()=>Array(n).fill(-1))
        
//     const data =  test(m - 1, n - 1, dp);
//     console.log(dp)
//     return data
// }; 

// var uniquePaths = function(m, n) {
    
//  let dp = new Array(m).fill(-1).map(()=>Array(n).fill(-1))
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       // Base condition: If we are at the top-left cell (0, 0), there is only one way to reach it.
//       if (i === 0 && j === 0) {
//         dp[i][j] = 1;
//         continue;
//       }

//       // Initialize variables to store the number of ways to reach the current cell by moving up and left.
//       let up = 0;
//       let left = 0;

//       // Check if we can move up (i > 0).
//       if (i > 0) {
//         up = dp[i - 1][j];
//       }

//       // Check if we can move left (j > 0).
//       if (j > 0) {
//         left = dp[i][j - 1];
//       }

//       // The total number of ways to reach the current cell is the sum of ways from above (up) and from the left (left).
//       dp[i][j] = up + left;
//     }
//   }
//     console.table(dp)
//   // The result is stored in the bottom-right cell of the grid (m-1, n-1).
//   return dp[m - 1][n - 1];
//     // const data =  test(m - 1, n - 1, dp);
//     // console.log(dp)
//     // return data
// }; 



var uniquePaths = function(m, n) {
    
 let prev = new Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    let curr = new Array(n).fill(0)
    for (let j = 0; j < n; j++) {
      // Base condition: If we are at the top-left cell (0, 0), there is only one way to reach it.
      if (i === 0 && j === 0) {
        curr[j] = 1;
        continue;
      }

      // Initialize variables to store the number of ways to reach the current cell by moving up and left.
      let up = 0;
      let left = 0;

      // Check if we can move up (i > 0).
      if (i > 0) {
        up = prev[j];
      }

      // Check if we can move left (j > 0).
      if (j > 0) {
        left = curr[j - 1];
      }

      // The total number of ways to reach the current cell is the sum of ways from above (up) and from the left (left).
      curr[j] = up + left;
    }
    prev = [...curr]
  }
    // console.table(dp)
  // The result is stored in the bottom-right cell of the grid (m-1, n-1).
  return prev[n - 1];
    // const data =  test(m - 1, n - 1, dp);
    // console.log(dp)
    // return data
}; 


