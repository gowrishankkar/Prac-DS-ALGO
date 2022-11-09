/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
//     var result = [];
    
//     if(numRows <= 0){
//         return result;
//     }
    
//     for(var i = 0; i < numRows; i++){
//         var cur = [];
//         var pre = i > 0 ? result[i - 1] : [];
        
//         for(var j = 0; j <= i; j++){
//             if(j === 0){
//                 cur.push(1);    
//             } else if(j === i){
//                 cur.push(1);
//             } else {
//                 cur.push(pre[j] + pre[j-1]);
//             }
//         }
        
//         result.push(cur);
//     }
    
//     return result; 
       let finalArr = [[1]] // we know subArr [1] will always be at the start of arr
    for(let i = 1; i < numRows; i++) { // loop through arr starting at 2nd subArr
        let subArr = [1] // add 1 to the beginning of each subArr
        let lastArr = finalArr[finalArr.length-1] // last subArr of finalArr
        for(let i = 0; i < finalArr.length-1; i++) {
            let sum = lastArr[i] + lastArr[i+1]
            subArr.push(sum)
        }
        subArr.push(1) // add 1 to subArr
        finalArr.push(subArr) // add subArr to finalArr
    }
    return finalArr
};