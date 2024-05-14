/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let m = grid[0].length;
    let n = grid.length;
    let maxPath = 0;
   for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(grid[i][j]!==0) maxPath = Math.max(maxPath, maxGold(grid, i, j));
        }
    }
    return maxPath;
};

const maxGold= (grid, l=0, r=0, result=0)=>{
    if(l>=grid.length || r>=grid[0].length || l<0 || r<0){
        return result;
    }
     else if (grid[l][r] !== 0) {
        result=result+grid[l][r];
        let temp = grid[l][r];
        grid[l][r] = 0;
        let bottom = maxGold(grid,l,r+1, result);
        let top = maxGold(grid,l+1,r, result);
        let right = maxGold(grid,l,r-1, result);
        let left = maxGold(grid,l-1,r, result);
        grid[l][r] = temp;
        return Math.max(left, right, top, bottom);
    }
    else return result;
}