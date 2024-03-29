/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // let A = matrix
    //  let zeroLocation = [];
    //     for (let i = 0; i < A.length; i++) {
    //         for (let j = 0; j < A[0].length; j++) {
    //             if (A[i][j] === 0) zeroLocation.push([i, j]);
    //         }
    //     }
    //     for (let i = 0; i < zeroLocation.length; i += 1) {
    //         for (let j = 0; j < A[0].length; j += 1) {
    //             A[zeroLocation[i][0]][j] = 0
    //         }
    //         for (let k = 0; k < A.length; k += 1) {
    //             A[k][zeroLocation[i][1]] = 0
    //         }
    //     }
    //     return A
    
    
    const zero = [];
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            if(matrix[i][j]===0) {
                zero.push([i, j]);
            }
        }
    }
    for(let element of zero) {
        for(let i=0;i<matrix.length;i++) {
            matrix[i][ element[1] ] = 0;
        }
        for(let j=0;j<matrix[0].length;j++) {
            matrix[ element[0]][j] = 0;
        }
    }
};