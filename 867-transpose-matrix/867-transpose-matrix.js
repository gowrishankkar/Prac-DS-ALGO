/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    //  let rowLen = matrix.length;
    //     let colLen = matrix[0].length;
    //     for (let r = 0; r < rowLen; r++) {
    //         for (let c = r + 1; c < colLen; c++) {
    //             // console.log(A[c][r])
    //             let temp = matrix[r][c];
    //             matrix[r][c] = matrix[c][r];
    //             matrix[c][r] = temp;
    //         }
    //     }
    // return matrix;
    
    
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