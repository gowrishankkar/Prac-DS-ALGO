/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
        let initialValue = 0;
    // console.log(Math.pow(2, 3))
    let result = checkFunction(n, initialValue); 
    function checkFunction(input, power){
         if(input == Math.pow(4, power)) return true
         else if(input < Math.pow(4, power))  return false;
        else return checkFunction(input, power + 1)
    }
    
    console.log('result', result)
    return result
};