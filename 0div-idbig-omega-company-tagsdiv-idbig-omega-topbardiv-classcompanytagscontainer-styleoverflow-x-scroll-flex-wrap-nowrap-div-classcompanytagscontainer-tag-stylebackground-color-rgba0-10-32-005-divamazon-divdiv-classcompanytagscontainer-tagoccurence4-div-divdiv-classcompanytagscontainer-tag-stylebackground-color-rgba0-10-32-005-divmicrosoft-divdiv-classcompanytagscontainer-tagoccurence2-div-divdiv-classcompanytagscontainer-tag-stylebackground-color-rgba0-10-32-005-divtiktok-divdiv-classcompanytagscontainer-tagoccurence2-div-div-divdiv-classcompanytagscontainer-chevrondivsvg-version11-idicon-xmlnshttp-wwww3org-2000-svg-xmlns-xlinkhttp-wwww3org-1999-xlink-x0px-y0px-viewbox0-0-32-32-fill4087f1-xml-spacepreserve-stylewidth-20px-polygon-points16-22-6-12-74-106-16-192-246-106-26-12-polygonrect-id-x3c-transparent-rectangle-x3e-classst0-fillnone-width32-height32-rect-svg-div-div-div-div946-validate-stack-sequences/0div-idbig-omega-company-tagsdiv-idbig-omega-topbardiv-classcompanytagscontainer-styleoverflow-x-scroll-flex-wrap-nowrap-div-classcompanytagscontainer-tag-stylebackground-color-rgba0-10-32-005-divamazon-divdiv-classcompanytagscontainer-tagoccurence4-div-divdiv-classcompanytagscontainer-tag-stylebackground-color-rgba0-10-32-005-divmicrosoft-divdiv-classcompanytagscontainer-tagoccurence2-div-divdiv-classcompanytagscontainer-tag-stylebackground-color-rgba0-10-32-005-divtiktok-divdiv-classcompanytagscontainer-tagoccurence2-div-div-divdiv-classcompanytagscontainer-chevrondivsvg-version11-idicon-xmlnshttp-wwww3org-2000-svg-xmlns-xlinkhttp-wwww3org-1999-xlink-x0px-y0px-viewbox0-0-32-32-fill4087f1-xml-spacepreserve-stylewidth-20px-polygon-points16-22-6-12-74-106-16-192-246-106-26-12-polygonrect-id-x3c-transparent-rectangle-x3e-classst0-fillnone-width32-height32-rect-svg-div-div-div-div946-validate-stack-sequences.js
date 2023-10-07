/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// var validateStackSequences = function(pushed, popped) {
//     if(pushed.length<=0)
//         return true;
//     let stk=[];    
//     let j=0;
//     let i=0;
//     let count=0;
//     while(i<pushed.length||j<popped.length){
//         if(stk.length<=0||stk[stk.length-1]!=popped[j]){
//             if(i>=pushed.length)
//                 return false;
//             stk.push(pushed[i++]);
//         }
            
//         else{
//             stk.pop();
//             count++;
//             j++;
//         }     
//     }
//     return pushed.length===count;
// };


var validateStackSequences = function(pushed, popped) {
   let stack = [];
    let j = 0;

    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        
        while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    
    // Check if the stack is empty at the end
    return stack.length === 0;
};