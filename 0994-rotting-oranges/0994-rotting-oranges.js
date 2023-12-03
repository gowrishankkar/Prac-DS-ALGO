/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let n =  grid.length;
    let m = grid[0].length;
    
    let q = [];
    let vis = new Array(n).fill([]).map((ele) => new Array(m).fill(0))
    console.log('vis', vis)
    for(let i = 0; i< n; i++){
        for(let j = 0; j< m; j++){
            if(grid[i][j] === 2){
                q.push([i, j, 0]);
                vis[i][j] = 2;
            }
        }
    }
        
    var getNeighbors = (currRow, n, currCol, m, vis, grid) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ r, c ]) => [ (currRow + r), (currCol + c) ])
    .filter(([ r, c ]) => (0 <= r) && (r < n) && (0 <= c) && (c < m) && vis[r][c] !== 2 && grid[r][c] == 1)

   
    let tMin = 0;
    while(q.length){
        let [r, c, t] = q.shift();
        tMin = Math.max(tMin, t)
        for(let [nRow, nCol] of getNeighbors(r, n, c, m, vis, grid)){
            q.push([nRow, nCol, t + 1])
            vis[nRow][nCol] = 2;
        }
        
    }
    
    for(let i = 0; i< n; i++){
        for(let j = 0; j< m; j++){
            if(vis[i][j] !== 2 && grid[i][j] == 1){
                return -1;
            }
        }
    }
    
    return tMin;


};