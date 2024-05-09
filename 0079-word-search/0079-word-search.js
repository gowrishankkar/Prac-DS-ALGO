/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    let n = board.length;
    let m = board[0].length;
    function dfs(r, c, index = 0){
       if(index === word.length ) return true;
       if (r < 0 || c < 0 || r >= n || c >= m || word[index] !== board[r][c]) return false;
        board[r][c] = "*";
        let found = false;
        for(let [dr, dc] of dir){
            let nr = r + dr;
            let nc = c + dc;
            if(dfs( nr, nc,  index + 1)){
                found=  true;
            }
        }
        board[r][c] = word[index];
        return found;
    }
    

    for(let i = 0; i < n ; i++){
        for(let j = 0; j < m ; j++){
           if(board[i][j] === word[0] && dfs( i, j, 0)) return true;
        }
    }
    return false
};

// var exist = function (board, word) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (board[i][j] == word[0] && searchWord(board, word, i, j, 0)) {
//                 return true;
//             }
//         }
//     }
//     return false
// };

// var searchWord = function (board, word, row, col, position) {
//     if (position == word.length) {
//         return true;
//     }
//     if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || position > word.length || board[row][col] == "*" || board[row][col] != word.charAt(position)) {
//         return false;
//     }

//     let temp = board[row][col];
//     board[row][col] = "*"
//     let down = searchWord(board, word, row + 1, col, position + 1);
//     let up = searchWord(board, word, row - 1, col, position + 1);
//     let left = searchWord(board, word, row, col - 1, position + 1);
//     let right = searchWord(board, word, row, col + 1, position + 1);
//     if (down || up || left || right) {
//         return true;
//     } else {
//         board[row][col] = temp;
//     }
//     return false
// }