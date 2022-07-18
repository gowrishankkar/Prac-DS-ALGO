/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
     const L = mat.length;
  let ans = 0;
  for (let i = 0; i < L; i += 1) {
    ans += mat[i][i];
    if (L-i-1 != i) {
      ans += mat[L-i-1][i];
    }
  }
  return ans;
    
};