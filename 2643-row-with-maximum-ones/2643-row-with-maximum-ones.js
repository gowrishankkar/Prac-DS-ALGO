/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let row = 0, max = 0;
    for(let i = 0; i < mat.length; i++){
        let sum = 0;
        for(let  j = 0; j <mat[0].length ; j++){
            sum += mat[i][j]
        }
        
        if(sum > max){
            max = sum ;
            row = i
        }
        
    }
    return [row, max ]
};