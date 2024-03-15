/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     function getMin(i , j, dp){
//         if(i == 0 && j == 0) return grid[0][0];
//         if( i < 0 || j < 0) return Infinity;
//         if(dp[i][j] !== -1) return dp[i][j];
//         let left = grid[i][j] + getMin(i - 1 , j, dp);
//         let right = grid[i][j] + getMin(i , j - 1, dp);
//         return dp[i][j] = Math.min(left, right)
//     }
//     let n = grid.length, m = grid[0].length;
//     const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

//     return getMin(n - 1, m - 1, dp)
// };


// var minPathSum = function(grid) {

//     let n = grid.length, m = grid[0].length;
//     const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));
    
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < m; j++){
//             if(i == 0 && j == 0) dp[i][j] = grid[0][0];
//             else{
//                 let left = Infinity;
//                 let up = Infinity;
//                 if(i > 0) left = grid[i][j] + dp[i-1][j];
//                 if(j > 0) up = grid[i][j] + dp[i][j-1];
//                  dp[i][j] = Math.min(up, left);
//             }
//         }
//     }
    
//     return dp[n - 1][m - 1];
// };



var minPathSum = function(grid) {
    let n = grid.length, m = grid[0].length;
    let prev = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        const temp = new Array(m).fill(0);
        for(let j = 0; j < m; j++){
            if(i == 0 && j == 0) temp[j] = grid[0][0];
            else{
                let left = Infinity;
                let up = Infinity;
                if(i > 0) left = grid[i][j] + prev[j];
                if(j > 0) up = grid[i][j] + temp[j-1];
                 temp[j] = Math.min(up, left);
            }
        }
        prev = [...temp]
    }
    
    return prev[m - 1];
};