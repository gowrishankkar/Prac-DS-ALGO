/**
 * @param {number[][]} matrix
 * @return {number}
 */
// var minFallingPathSum = function(matrix) {
//     const n = matrix.length;
//     const m = matrix[0].length;
//     const dp = new Array(n).fill().map(() => new Array(m).fill(0));
//       for (let j = 0; j < m; j++) {
//         dp[0][j] = matrix[0][j];
//       }
 
    
//     for(let i = 1; i < n ; i++){
//         for(let j = 0; j < m ; j++){
//             const up = matrix[i][j] + dp[i-1][j];
//             let left = matrix[i][j] 
//             let right = matrix[i][j]
//             if(j - 1 >= 0) left = matrix[i][j] + dp[i-1][j-1]
//             else left = Infinity;
//             if(j + 1 < m) right = matrix[i][j] + dp[i-1][j+1]
//             else right = Infinity;
//             dp[i][j] = Math.min(up, left , right)
//         }
//     }
    
//     let max = Number.MAX_SAFE_INTEGER;
//     for(let i = 0; i < m; i++){
//         max = Math.min(max, dp[n-1][i])
//     }
    
//     return max;

// };


var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let prev = new Array(m).fill(0);
    let cur = new Array(m).fill(0);
    for (let j = 0; j < m; j++) {
        prev[j] = matrix[0][j];
    }
    for(let i = 1; i < n ; i++){
        for(let j = 0; j < m ; j++){
            const up = matrix[i][j] + prev[j];
            let left = matrix[i][j] 
            let right = matrix[i][j]
            if(j - 1 >= 0) left = matrix[i][j] + prev[j-1]
            else left = Infinity;
            if(j + 1 < m) right = matrix[i][j] + prev[j+1]
            else right = Infinity;
            cur[j] = Math.min(up, left , right)
        }
            prev = [...cur];
    }
    
    let max = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < m; i++){
        max = Math.min(max,prev[i])
    }
    
    return max;

};