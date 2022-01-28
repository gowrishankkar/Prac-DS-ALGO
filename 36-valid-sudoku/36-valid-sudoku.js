/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   let isValid = true;
    
    const rowsAreValid = board.every((row) => isValidSudokuSet(row));
    
    if (!rowsAreValid) { return false; }
    
    const indexes = Array.from(Array(9).keys()); // 0..8
    
    const boxes = [];
    
    const columns = indexes.map((columnIndex) => {        
        return indexes.map((rowIndex) => {
            const boxIndex = sudokuBoxIndex(rowIndex, columnIndex)
            const box = boxes[boxIndex] = boxes[boxIndex] || []
            
            const cellValue = board[rowIndex][columnIndex];
            
            box.push(cellValue);
            
            return cellValue;
        });
    });

    const columnsAreValid = columns.every((column) => isValidSudokuSet(column));
        
    if (!columnsAreValid) { return false; }
    
    const boxesAreValid = boxes.every((box) => isValidSudokuSet(box));
    
    return boxesAreValid;
};

function isValidSudokuSet(sudokuSet) {
    const numeric_values = sudokuSet.filter((cell) => cell !== '.');
    
    const unique_numeric_values = numeric_values.filter((cell, index, array) => array.indexOf(cell) == index);
    
    return numeric_values.length == unique_numeric_values.length;
}

function sudokuBoxIndex(rowIndex, columnIndex) {
    const boxRowIndex = Math.floor(rowIndex / 3)
    const boxColumnIndex = Math.floor(columnIndex / 3)
    const boxIndex = (boxColumnIndex * 3) + boxRowIndex;
    
    return boxIndex;
}