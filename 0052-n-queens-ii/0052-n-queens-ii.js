/**
 * @param {number} n
 * @return {number}
 */

function totalNQueens(n, colSet = new Set(), posDiagSet = new Set(), negDiagSet = new Set()) {
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));

    const result = dfs(board, n, colSet, posDiagSet, negDiagSet) 
    return result.length;
}

const dfs = (board, n, colSet, posDiagSet, negDiagSet, row = 0, moves = []) => {
    const isBaseCase = row === n;
    if (isBaseCase) {
        const rows = board.map((_row) => _row.join(''))

        moves.push(rows);

        return moves;
    }

    for (let col = 0; col < n; col++) {
        const hasQueen = colSet.has(col) || posDiagSet.has(row + col) || negDiagSet.has(row - col)
        if (hasQueen) continue;

        backTrack(board, n, row, col, colSet, posDiagSet, negDiagSet, moves);
    }

    return moves
}

const backTrack = (board, n, row, col, colSet, posDiagSet, negDiagSet, moves) => {
    colSet.add(col);
    posDiagSet.add(row + col);
    negDiagSet.add(row - col);
    board[row][col] = "Q";

        dfs(board, n, colSet, posDiagSet, negDiagSet, (row + 1), moves);

    colSet.delete(col);
    posDiagSet.delete(row + col);
    negDiagSet.delete(row - col);
    board[row][col] = ".";
}