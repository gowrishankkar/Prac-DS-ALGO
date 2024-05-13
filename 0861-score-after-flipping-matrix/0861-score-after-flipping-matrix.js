/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let ans=0;
    
    for(let i=0;i<grid.length;i++){
        if(grid[i][0]==0){
            for(let j=0;j<grid[i].length;j++){
                if(grid[i][j]==0){
                    grid[i][j]=1;
                }else{
                    grid[i][j]=0;
                }
            }
        }
    }

    for(let i=0;i<grid[0].length;i++){
        let count=0;
        for(let j=0;j<grid.length;j++){ 
            count+=grid[j][i];
        }
        if(count<grid.length-count){
            for(let j=0;j<grid.length;j++){
                if(grid[j][i]==0){
                    grid[j][i]=1;
                }else{
                    grid[j][i]=0;
                }
            }
        }
        count=0;
         for(let j=0;j<grid.length;j++){
              count+=grid[j][i];
            }
        ans+=count*(2**(grid[0].length-i-1));
    }
     return ans;
};