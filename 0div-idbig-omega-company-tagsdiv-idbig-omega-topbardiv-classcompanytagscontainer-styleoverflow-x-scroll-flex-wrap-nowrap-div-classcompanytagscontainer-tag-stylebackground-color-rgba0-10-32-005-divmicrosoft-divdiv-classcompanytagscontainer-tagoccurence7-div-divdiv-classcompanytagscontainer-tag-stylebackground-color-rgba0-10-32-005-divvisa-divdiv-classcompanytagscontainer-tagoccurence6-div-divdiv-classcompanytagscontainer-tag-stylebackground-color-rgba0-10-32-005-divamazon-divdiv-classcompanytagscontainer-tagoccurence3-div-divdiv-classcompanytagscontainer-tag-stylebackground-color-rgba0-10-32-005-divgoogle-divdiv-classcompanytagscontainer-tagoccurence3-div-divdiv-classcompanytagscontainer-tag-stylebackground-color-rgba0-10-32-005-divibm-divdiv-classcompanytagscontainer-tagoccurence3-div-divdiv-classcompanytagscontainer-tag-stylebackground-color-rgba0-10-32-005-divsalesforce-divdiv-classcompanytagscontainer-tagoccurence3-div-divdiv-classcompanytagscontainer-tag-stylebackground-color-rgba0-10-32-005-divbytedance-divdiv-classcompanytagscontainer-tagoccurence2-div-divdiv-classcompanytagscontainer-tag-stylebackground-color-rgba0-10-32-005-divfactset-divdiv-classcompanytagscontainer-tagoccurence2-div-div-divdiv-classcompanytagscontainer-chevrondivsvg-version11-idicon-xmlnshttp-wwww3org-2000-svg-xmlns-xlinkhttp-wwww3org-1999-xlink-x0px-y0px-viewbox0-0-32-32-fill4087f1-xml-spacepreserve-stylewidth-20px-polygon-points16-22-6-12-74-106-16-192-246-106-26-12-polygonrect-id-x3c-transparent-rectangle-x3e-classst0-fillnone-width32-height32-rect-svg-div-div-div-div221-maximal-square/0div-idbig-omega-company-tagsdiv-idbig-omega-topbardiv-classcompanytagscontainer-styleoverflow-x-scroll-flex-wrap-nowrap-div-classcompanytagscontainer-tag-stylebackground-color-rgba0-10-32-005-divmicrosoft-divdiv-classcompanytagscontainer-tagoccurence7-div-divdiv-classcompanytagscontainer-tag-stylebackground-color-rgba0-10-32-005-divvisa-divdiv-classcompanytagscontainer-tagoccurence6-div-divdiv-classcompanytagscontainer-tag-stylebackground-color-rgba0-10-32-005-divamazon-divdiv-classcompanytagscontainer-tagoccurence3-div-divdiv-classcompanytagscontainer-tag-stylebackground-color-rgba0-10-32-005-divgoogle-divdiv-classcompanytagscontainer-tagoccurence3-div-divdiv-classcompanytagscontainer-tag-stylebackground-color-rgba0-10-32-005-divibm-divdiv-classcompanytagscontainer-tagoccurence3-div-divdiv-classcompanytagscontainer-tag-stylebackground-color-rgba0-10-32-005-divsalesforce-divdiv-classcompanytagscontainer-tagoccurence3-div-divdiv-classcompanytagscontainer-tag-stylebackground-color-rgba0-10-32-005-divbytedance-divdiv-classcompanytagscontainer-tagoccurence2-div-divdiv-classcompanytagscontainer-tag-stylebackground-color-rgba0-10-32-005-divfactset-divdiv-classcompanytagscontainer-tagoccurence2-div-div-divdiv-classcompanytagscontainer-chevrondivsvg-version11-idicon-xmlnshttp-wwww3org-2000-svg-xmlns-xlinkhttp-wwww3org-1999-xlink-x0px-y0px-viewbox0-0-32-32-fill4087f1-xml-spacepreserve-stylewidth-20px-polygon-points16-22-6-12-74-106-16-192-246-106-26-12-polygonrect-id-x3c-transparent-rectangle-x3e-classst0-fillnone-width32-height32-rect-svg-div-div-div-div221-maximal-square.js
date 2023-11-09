/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
   let maxLen = 0;
        for (let i = 0; i < matrix.length; i++){
            for (let j = 0; j < matrix[0].length; j++){
                if (matrix[i][j] > '0'){
                    set(matrix, i, j);
                    maxLen = Math.max(maxLen, matrix[i][j] - '0');
                }
            }
        }
        return maxLen*maxLen;
    }
    
   let set = function(matrix,  i, j){
        if (i < 1 || j < 1) return;
        if (matrix[i - 1][j] != '0' && matrix[i - 1][j - 1] != '0' && matrix[i][j - 1] != '0'){
            let val = Math.min(Math.min(matrix[i - 1][j], matrix[i][j - 1]), matrix[i - 1][j - 1]) + 1;
            matrix[i][j] = val;
        }
    }