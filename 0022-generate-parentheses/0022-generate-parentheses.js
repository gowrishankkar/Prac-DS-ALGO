/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {

// const result=[];

//     function backTracking(current,open,close){
//  if(current.length===2*n){
//     result.push(current);
//     return;
//  }
// if(open<n){
//    backTracking(current+'(',open+1,close); 
// }
// if(close<open){
//     backTracking(current+')',open,close+1)
// }
//     }
//     backTracking('',0,0)
//     return result;
// };



var generateParenthesis = function (n) {
    const ans = [];
    const backtrack = (curr, open, close) => {
        console.log('curr', curr, open, close)
        if(open === n  && close === n && curr.length===2*n){ 
            ans.push(curr);
            return
        }
        if(open < n){
            backtrack(curr + '(', open +1,  close );
        } 
        if(close < open){
           backtrack(curr + ')', open  ,  close + 1); 
        }
          
    }
    backtrack("", 0, 0)
    return ans;
};