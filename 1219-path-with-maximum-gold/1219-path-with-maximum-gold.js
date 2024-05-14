/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const lenH = grid.length;
    const lenW = grid[0].length;
    const traveled = [];
    for (let i = 0; i < lenH; ++i) {
        traveled.push([]);
        for (let j = 0; j < lenW; ++j) {
            traveled[i].push(0);
        }
    }
    
    const dfs = (i, j) => {
        if (grid[i][j] <=0 ) {
            return 0;
        }
        let result = 0;
        if (i > 0 && !traveled[i-1][j]) {
            traveled[i-1][j] = 1;
            result = Math.max(result, dfs(i-1, j));
            traveled[i-1][j] = 0;
        }
        if (j > 0 && !traveled[i][j-1]) {
            traveled[i][j-1] = 1;
            result = Math.max(result, dfs(i, j-1));
            traveled[i][j-1] = 0;
        }
        if (i < lenH-1 && !traveled[i+1][j]) {
            traveled[i+1][j] = 1;
            result = Math.max(result, dfs(i+1, j));
            traveled[i+1][j] = 0;
        }
        if (j < lenW-1 && !traveled[i][j+1]) {
            traveled[i][j+1] = 1;
            result = Math.max(result, dfs(i, j+1));
            traveled[i][j+1] = 0;
        }
        result += grid[i][j];
        return result;
    }
    
    let maxGold = 0;
    for (let i = 0; i < lenH; ++i) {
        for (let j = 0; j < lenW; ++j) {
            traveled[i][j] = 1;
            maxGold = Math.max(dfs(i, j), maxGold);
            traveled[i][j] = 0;
        }
    }
    return maxGold;
};