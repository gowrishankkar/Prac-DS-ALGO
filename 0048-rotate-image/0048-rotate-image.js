/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
   let rows = matrix.length;
    let columns = matrix[0].length
    
    for(let i=0;i<rows;i++){
      for(let j=i+1;j<columns;j++){
        let temp=matrix[i][j];
        matrix[i][j]=matrix[j][i];
        matrix[j][i]=temp;
      }
    }
    
    for(let i=0;i<rows;i++){
      for(let j=0;j<=(columns/2)-1;j++){
        let temp=matrix[i][j];
        matrix[i][j]=matrix[i][columns-j-1];
        matrix[i][columns-j-1]=temp;
      }
    }
    return matrix
};