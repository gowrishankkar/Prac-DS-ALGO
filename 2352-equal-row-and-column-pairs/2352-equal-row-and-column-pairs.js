/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowLen = grid.length;
    let colLen = grid[0].length;
    
    let rowMap = {}
    let colMap = {}

    for(let r = 0; r < rowLen; r++){
        let str = ''
        for(let c = 0; c < colLen; c++){
            str += `${grid[r][c]}#`;
        }
        rowMap[str] = rowMap[str] ? rowMap[str]  + 1 : 1
    }
    
     let count = 0
     
    for(let c = 0; c < colLen; c++){
        let str = ''
        for(let r = 0; r < rowLen; r++){
            str += `${grid[r][c]}#`;
        }
        // colMap[str] = colMap[str] ? colMap[str]  + 1 : 1
        
        count +=  rowMap[str] || 0
    }
    console.log('rowMap[str]', rowMap)
    // let count = 0
    // for(let r in rowMap){
    //     if(colMap[r]) count += rowMap[r] * colMap[r] 
    // }
    
    return count;
};