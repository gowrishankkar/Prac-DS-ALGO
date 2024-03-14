/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
    let res = [];
    
    function isValid(board, row, col) {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        
        // Check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        // Check upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        return true;
    }
    
    function solve(board, row) {
        if (row === n) {
            return res.push(board.map(row => row.join('')));
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    // Initialize the board
    const board = Array.from({length: n}, () => Array(n).fill('.'));
    
    solve(board, 0);
    
    return res.length;
};