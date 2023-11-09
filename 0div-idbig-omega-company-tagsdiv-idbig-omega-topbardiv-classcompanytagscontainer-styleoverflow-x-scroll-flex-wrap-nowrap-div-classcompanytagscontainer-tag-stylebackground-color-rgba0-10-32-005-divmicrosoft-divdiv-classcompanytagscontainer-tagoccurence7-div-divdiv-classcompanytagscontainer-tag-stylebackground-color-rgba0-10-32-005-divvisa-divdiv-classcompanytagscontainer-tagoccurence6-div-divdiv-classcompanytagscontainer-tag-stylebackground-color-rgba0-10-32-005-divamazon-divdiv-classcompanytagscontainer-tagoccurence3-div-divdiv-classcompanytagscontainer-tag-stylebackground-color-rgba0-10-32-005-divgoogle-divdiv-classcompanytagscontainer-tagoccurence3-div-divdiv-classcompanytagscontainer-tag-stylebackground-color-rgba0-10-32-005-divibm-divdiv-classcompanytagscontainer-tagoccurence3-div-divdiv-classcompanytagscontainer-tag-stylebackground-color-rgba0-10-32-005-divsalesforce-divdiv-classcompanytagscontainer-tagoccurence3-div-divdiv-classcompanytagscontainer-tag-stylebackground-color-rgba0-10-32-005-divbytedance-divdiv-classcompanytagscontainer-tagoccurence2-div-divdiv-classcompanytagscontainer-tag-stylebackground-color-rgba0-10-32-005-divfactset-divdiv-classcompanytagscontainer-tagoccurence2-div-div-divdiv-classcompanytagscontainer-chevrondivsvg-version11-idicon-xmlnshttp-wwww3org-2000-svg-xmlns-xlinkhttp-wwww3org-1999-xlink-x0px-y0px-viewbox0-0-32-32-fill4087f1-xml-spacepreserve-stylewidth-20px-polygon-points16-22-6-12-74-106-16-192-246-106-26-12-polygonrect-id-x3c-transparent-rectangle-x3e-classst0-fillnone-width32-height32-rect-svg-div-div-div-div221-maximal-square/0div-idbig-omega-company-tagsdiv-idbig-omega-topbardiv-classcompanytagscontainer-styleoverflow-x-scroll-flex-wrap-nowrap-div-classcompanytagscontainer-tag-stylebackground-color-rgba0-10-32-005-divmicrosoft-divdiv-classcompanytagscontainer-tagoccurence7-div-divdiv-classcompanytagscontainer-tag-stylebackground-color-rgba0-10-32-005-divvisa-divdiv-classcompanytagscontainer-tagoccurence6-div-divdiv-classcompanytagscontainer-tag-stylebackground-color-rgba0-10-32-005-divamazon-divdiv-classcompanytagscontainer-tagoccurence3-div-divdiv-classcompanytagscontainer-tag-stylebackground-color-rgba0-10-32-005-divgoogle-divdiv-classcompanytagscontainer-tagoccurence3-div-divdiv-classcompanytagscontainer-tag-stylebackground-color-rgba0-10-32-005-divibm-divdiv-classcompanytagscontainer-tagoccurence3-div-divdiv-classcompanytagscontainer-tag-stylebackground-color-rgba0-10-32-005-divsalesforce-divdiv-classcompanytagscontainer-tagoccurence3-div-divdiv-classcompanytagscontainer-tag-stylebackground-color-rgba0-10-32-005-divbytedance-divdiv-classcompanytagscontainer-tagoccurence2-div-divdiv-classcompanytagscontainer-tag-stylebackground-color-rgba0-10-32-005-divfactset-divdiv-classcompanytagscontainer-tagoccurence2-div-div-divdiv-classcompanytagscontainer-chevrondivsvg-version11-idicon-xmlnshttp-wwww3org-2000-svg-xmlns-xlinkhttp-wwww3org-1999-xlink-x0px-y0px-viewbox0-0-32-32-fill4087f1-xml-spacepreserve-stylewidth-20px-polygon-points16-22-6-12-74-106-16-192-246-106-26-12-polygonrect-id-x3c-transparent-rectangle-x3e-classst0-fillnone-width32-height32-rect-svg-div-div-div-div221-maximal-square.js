/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalSquare = function(matrix) {
//    let maxLen = 0;
//         for (let i = 0; i < matrix.length; i++){
//             for (let j = 0; j < matrix[0].length; j++){
//                 if (matrix[i][j] > '0'){
//                     set(matrix, i, j);
//                     maxLen = Math.max(maxLen, matrix[i][j] - '0');
//                 }
//             }
//         }
//         return maxLen*maxLen;
//     }
    
//    let set = function(matrix,  i, j){
//         if (i < 1 || j < 1) return;
//         if (matrix[i - 1][j] != '0' && matrix[i - 1][j - 1] != '0' && matrix[i][j - 1] != '0'){
//             let val = Math.min(Math.min(matrix[i - 1][j], matrix[i][j - 1]), matrix[i - 1][j - 1]) + 1;
//             matrix[i][j] = val;
//         }
//     }


var maximalSquare = function(matrix) {
    if (!matrix.length) return 0;
    let dp = new Array(matrix.length+1).fill(0).map(()=>new Array(matrix[0].length+1).fill(0));
    let max = 0;
    for (let r=1;r<dp.length;r++) { 
        for (let c=1;c<dp[0].length;c++) {
            if (matrix[r-1][c-1]!=0) {
                dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])+1;
                max = Math.max(dp[r][c], max);
            }
        }
    }
    return max**2;
};