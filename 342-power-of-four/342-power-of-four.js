/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    // solution 1 - recursively
//         let initialValue = 0;
//     // console.log(Math.pow(2, 3))
//     let result = checkFunction(n, initialValue); 
//     function checkFunction(input, power){
//          if(input == Math.pow(4, power)) return true
//          else if(input < Math.pow(4, power))  return false;
//         else return checkFunction(input, power + 1)
//     }
    
//     console.log('result', result)
//     return result
    
        
    // Solution 2
    let i = 1;
    while(i < n) {
        i *= 4;
    }
    
    return i === n
};