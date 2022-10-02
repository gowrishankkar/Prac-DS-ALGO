/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   let sum=0
    while(num){
        sum+=num%10
        num=Math.floor(num/10)
    }
    if(sum.toString().length>1) {
       return sum && addDigits(sum)
    }
    
    return sum 
};