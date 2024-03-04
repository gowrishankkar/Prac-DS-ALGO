/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    
    let n =  mat.length;
    let m = mat[0].length;
    let l = 0, h = m -1;
    while(l <= h){
        let mid =  Math.floor((l + h)/ 2);
        let maxRowIndex = getMaxEle(mat, n, m, mid)
        let left = mid-1 > 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid+1 < m ? mat[maxRowIndex][mid + 1] : -1;
        if( mat[maxRowIndex][mid] > left &&  mat[maxRowIndex][mid] > right){
            return  [maxRowIndex, mid]
        } else if( mat[maxRowIndex][mid] < left){
            h = mid - 1
        } else l = mid + 1
    }
        
    function getMaxEle(mat, n, m, col){
        let maxValue = -1;
        let index = -1;
        for(let i = 0; i < n; i++){
            if(mat[i][col] > maxValue){
                maxValue = mat[i][col];
                index = i
            }
        }
        return index;
    }
    
    return [-1, -1]
    
};