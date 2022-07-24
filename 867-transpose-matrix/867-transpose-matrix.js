/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
     let rowLen = matrix.length;
    let result = []
        let colLen = matrix[0].length;
        for (let i = 0; i < rowLen; i++) {
            for (let j = 0; j < colLen; j++) {
                // console.log(A[c][r])
                 if(!result[j]){
                    result[j] = [];
                } 
                result[j][i] = matrix[i][j];
            }
        }
    return result;
};