/**
 * @param {number[][]} grid
 * @return {number}
 */
// var orangesRotting = function(grid) {
//     let n =  grid.length;
//     let m = grid[0].length;
    
//     let q = [];
//     let flag = 0
//     let vis = new Array(n).fill([]).map((ele) => new Array(m).fill(0))
//     console.log('vis', vis)
//     for(let i = 0; i< n; i++){
//         for(let j = 0; j< m; j++){
//             if(grid[i][j] === 2){
//                 q.push([i, j, 0]);
//                 vis[i][j] = 2;
//             }
//             if(grid[i][j] == 1) flag = 1;
//         }
//     }
//     if(!flag) return 0;
//     var getNeighbors = (currRow, n, currCol, m, vis, grid) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
//     .map(([ r, c ]) => [ (currRow + r), (currCol + c) ])
//     .filter(([ r, c ]) => (0 <= r) && (r < n) && (0 <= c) && (c < m) && vis[r][c] !== 2 && grid[r][c] == 1)

//     let tMin = 0;
//     while(q.length){
//         let [r, c, t] = q.shift();
//         tMin = Math.max(tMin, t)
//         for(let [nRow, nCol] of getNeighbors(r, n, c, m, vis, grid)){
//             q.push([nRow, nCol, t + 1])
//             vis[nRow][nCol] = 2;
//         }
        
//     }
    
//     for(let i = 0; i< n; i++){
//         for(let j = 0; j< m; j++){
//             if(vis[i][j] !== 2 && grid[i][j] == 1){
//                 return -1;
//             }
//         }
//     }
    
//     return tMin;


// };


// var orangesRotting = function(grid) {
//     let n =  grid.length;
//     let m = grid[0].length;
    
//     let q = [];
//     let flag = 0
//     for(let i = 0; i< n; i++){
//         for(let j = 0; j< m; j++){
//             if(grid[i][j] === 2){
//                 q.push([i, j, 0]);
//             }
//             if(grid[i][j] == 1) flag = 1;
//         }
//     }
//     if(!flag) return 0;
    
//     var getNeighbors = (currRow, n, currCol, m, grid) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
//     .map(([ r, c ]) => [ (currRow + r), (currCol + c) ])
//     .filter(([ r, c ]) => (0 <= r) && (r < n) && (0 <= c) && (c < m) && grid[r][c] !== 2 && grid[r][c] == 1)

//     let tMin = 0;
//     while(q.length){
//         let [r, c, t] = q.shift();
//         tMin = Math.max(tMin, t)
//         for(let [nRow, nCol] of getNeighbors(r, n, c, m,  grid)){
//             q.push([nRow, nCol, t + 1])
//             grid[nRow][nCol] = 2;
//         }
        
//     }
    
//     for(let i = 0; i< n; i++){
//         for(let j = 0; j< m; j++){
//             if(grid[i][j] == 1){
//                 return -1;
//             }
//         }
//     }
    
//     return tMin;


// };

   


var orangesRotting = function(grid) {
    const dir = [
        [-1,0],
        [0,-1],
        [1,0],
        [0,1]
    ]
    let rot = []
    let flag = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                flag = 1
                break
            }
        }
    }
    if(flag === 0) return 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===2){
                rot.push([i,j])
            }
        }
    }
    let rc = 0
    let count = rot.length
     while(rot.length){
         let rotten = rot.shift()
         count--
         for(let i=0;i<dir.length;i++){
             let nr = rotten[0] + dir[i][0]
             let nc = rotten[1] + dir[i][1]
             if(nr<0 || nr>=grid.length || nc<0 || nc>=grid[0].length) {continue;}
             if(grid[nr][nc] === 1){
                 grid[nr][nc] = 2
                 rot.push([nr,nc])
                 
             }
         }
         if(count === 0 && rot.length>0){
                     rc++
                     count = rot.length
                 }
     }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                return -1
            }
        }
    }
    return rc
     

};