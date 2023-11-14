/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length, n = grid[0].length;
    
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const isValid = (x, y) => x >= 0 && y >= 0 && x <= m-1 && y <= n-1 && grid[x][y] == 1;
    const dfs = (i, j) => {
        grid[i][j] = 0;
        dirs.forEach(([x, y]) => {
            const X = x + i;
            const Y = y + j;
            if(isValid(X, Y)) dfs(X, Y);
        })
    }
    
    let c = 0;
    for(let i = 0; i < m; i++) {
        if(grid[i][0] == 1) dfs(i, 0);
        if(grid[i][n-1] == 1) dfs(i, n-1);
    }
    
    for(let i = 0; i < n; i++) {
        if(grid[0][i] == 1) dfs(0, i);
        if(grid[m-1][i] == 1) dfs(m-1, i);
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j]) c++;
        }
    }
    
    return c;
};