/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
      if(matrix.length === 0) {
        return 0;
    }
    
    let [max, lmax, rmax, n ] = [0, 0, matrix[0].length, matrix[0].length];

    const h = Array(matrix[0].length).fill(0);
    const right = Array(matrix[0].length).fill(n);
    const left = Array(matrix[0].length).fill(0);
    for(let i = 0; i < matrix.length; i++) {
        lmax = 0;
        rmax = n;
        for(let j = 0; j < n; j++) {
            h[j] = (matrix[i][j] === '1') ? h[j]+1 : 0;
        }
        
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === '1') {
                left[j] = Math.max(left[j], lmax);
            } else {
                left[j] = 0;
                lmax = j+1;
            }
        }
        
        for(let j = n; j >= 0; j--) {
            if(matrix[i][j] === '1') {
                right[j] = Math.min(right[j], rmax);
            } else {
                right[j] = n;
                rmax = j;
            }
        }
        
        console.log(h, left, right);
        for(let j = 0; j < n; j++) {
            const area = h[j] * (right[j] - left[j]);
            max = Math.max(max, area);
        }
    }
    return max;
};