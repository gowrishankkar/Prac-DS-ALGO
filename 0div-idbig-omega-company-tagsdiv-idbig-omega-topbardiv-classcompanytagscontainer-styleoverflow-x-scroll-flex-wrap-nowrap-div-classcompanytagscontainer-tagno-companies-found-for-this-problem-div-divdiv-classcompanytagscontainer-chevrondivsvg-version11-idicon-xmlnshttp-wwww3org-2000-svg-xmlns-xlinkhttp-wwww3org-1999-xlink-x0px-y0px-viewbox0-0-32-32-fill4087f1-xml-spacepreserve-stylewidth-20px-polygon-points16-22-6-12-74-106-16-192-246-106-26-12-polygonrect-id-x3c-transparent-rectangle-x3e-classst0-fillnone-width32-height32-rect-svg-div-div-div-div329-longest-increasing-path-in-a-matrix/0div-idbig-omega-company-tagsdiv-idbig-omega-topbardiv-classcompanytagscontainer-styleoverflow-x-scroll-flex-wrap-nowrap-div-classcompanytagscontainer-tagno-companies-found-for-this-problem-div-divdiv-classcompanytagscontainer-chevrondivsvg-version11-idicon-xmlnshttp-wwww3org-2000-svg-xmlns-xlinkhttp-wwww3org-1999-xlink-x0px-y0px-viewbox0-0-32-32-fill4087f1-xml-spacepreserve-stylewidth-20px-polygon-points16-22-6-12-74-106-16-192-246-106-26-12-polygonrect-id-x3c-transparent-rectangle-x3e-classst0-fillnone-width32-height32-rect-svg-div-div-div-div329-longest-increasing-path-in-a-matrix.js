/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = (matrix, maxPath = 0, memo = initMemo(matrix)) => {
    const [ rows, cols ] = [ matrix.length, matrix[0].length ];

    for (let row = 0; row < rows; row++) {/* Time O(N) */
        for (let col = 0; col < cols; col++) {/* Time O(M) */
            const path =                  /* Time O(N * M) | Space O((N * M) + HEIGHT) */
                search(matrix, row, rows, col, cols, memo);

            maxPath = Math.max(maxPath, path);
        }
    }

    return maxPath;
};

var initMemo = (matrix) => new Array(matrix.length).fill()/* Time O(N) | Space O(N)*/
    .map(() => new Array(matrix[0].length).fill(0));          /* Time O(M) | Space O(M)*/

const search = (matrix, row, rows, col, cols, memo) => {
    const hasSeen = (memo[row][col] !== 0)
    if (hasSeen) return memo[row][col];

    return dfs(matrix, row, rows, col, cols, memo);/* Time O(N * M) | Space O((N * M) + HEIGHT) */
}

var dfs = (matrix, row, rows, col, cols, memo) => {
    for (const [ _row, _col ] of getNeighbors(row, rows, col, cols)) {/* Time O(4) */
        const [ parent, node ] = [ matrix[row][col], matrix[_row][_col] ];

        const isLess = (node <= parent);
        if (isLess) continue;

        const path = search(matrix, _row, rows, _col, cols, memo);    /* Time O(N * M) | Space O(HEIGHT) */

        memo[row][col] = Math.max(memo[row][col], path);
    }

    memo[row][col] += 1;                                              /*               | Space O(N * M) */
    return memo[row][col];
}

var getNeighbors = (row, rows, col, cols) => [ [ 0, 1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([ _row, _col ]) => [ (row + _row), (col + _col) ])
    .filter(([ _row, _col ]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));
