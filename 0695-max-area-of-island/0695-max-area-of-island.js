/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    const n = grid.length;
    const m = grid[0].length;

    let maxArea = 0;
    let area = 0;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const calculateArea = (x0, y0, marker) => {
        grid[x0][y0] = marker;
        area++;
        for (const [dx, dy] of directions) {
            const x = x0 + dx;
            const y = y0 + dy;
            if (x < n && x >= 0 && y < m && y >= 0 && grid[x][y] === 1) {
                calculateArea(x, y, marker);
            }
        }
    }

    let island = 'test';
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            area = 0;
            if (grid[x][y] === 1) {
                calculateArea(x, y, island);

                if (area > 0) {
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
    }

    return maxArea;
};

// var maxAreaOfIsland = function(grid) {
//     let maxArea = 0;

//     const dfs = (i,j) => {
//         // Skip the current coordinates
//         if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0 || !grid[i][j]) {
//             return 0;
//         }
//         // Convert the current one to 0 to mark it as visited basically 
//         grid[i][j] = 0;
//         return 1 + dfs(i-1, j) + dfs(i, j-1) + dfs(i+1, j) + dfs(i, j+1)
//     }

//     for(let i=0; i<grid.length; i++) {
//         for(let j=0; j<grid[0].length; j++) {
//             if(grid[i][j] === 1) {
//                 maxArea = Math.max(maxArea, dfs(i,j));
//             }
//         }
//     }
//     return maxArea;
// };
