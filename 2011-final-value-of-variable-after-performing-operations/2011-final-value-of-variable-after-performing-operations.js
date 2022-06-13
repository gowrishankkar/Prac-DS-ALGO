/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x =0;
    const obj = {
        "X++": 1,
        "++X": 1,
        "X--": -1,
        "--X": -1,
    }
    for(let i = 0; i<operations.length; i++){
        x+=obj[operations[i]];
    }
    return x;
};