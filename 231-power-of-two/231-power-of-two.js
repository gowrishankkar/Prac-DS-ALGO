/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let initialValue = 0;
    // console.log(Math.pow(2, 3))
//     let result = checkFunction(n, initialValue); 
//     function checkFunction(input, power){
//          if(input == Math.pow(2, power)) return true
//          else if(input < Math.pow(2, power))  return false;
//         else return checkFunction(input, power + 1)
//     }
    
//     console.log('result', result)
//     return result
     if (n < 1) return false;
  return (n & (n - 1)) === 0; 
   
};