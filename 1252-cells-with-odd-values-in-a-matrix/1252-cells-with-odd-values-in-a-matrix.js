/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    // console.log('m, n, indices', m, n, indices)
//     let grid = []
//     for (let i = 0; i < m; i += 1) {
//         let row = []
//         for (let j = 0; j < n; j += 1) {
//             row.push(0)
           
//         }
//         grid.push(row)
//     }

    
    let grid = Array(m).fill().map(() => Array(n).fill(0));

    
      for (let i = 0; i < indices.length; i += 1) {
           let row = indices[i][0];
        let column =  indices[i][1];
           // console.log(row, column)
          
                for (let j = 0; j < n; j += 1) {
                    grid[row][j] += 1
                }
                 for (let k = 0; k < m; k += 1) {
                     console.log('k', k)
                   grid[k][column] += 1
                }

    }
    
    let oddNumbers = 0;
  for (let i = 0; i < m; i += 1) {
     
        for (let j = 0; j < n; j += 1) {
             if(grid[i][j] % 2 != 0) oddNumbers++
           
        }

    }
    
    return oddNumbers;
     // console.log('grid', grid)
    
};