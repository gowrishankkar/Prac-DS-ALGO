/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let A = matrix
    let n = A.length;
            for(let i=0;i<n/2;i++){
                for(let j=i;j<n-i-1;j++){
                    let temp=A[i][j];
                    A[i][j]=A[n-1-j][i];
                    A[n-1-j][i]=A[n-1-i][n-1-j];
                    A[n-1-i][n-1-j]=A[j][n-1-i];
                    A[j][n-1-i]=temp;
                }
            }
            return A;
};