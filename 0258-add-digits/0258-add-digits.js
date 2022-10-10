/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
//    let sum=0
//     while(num){
//         sum+=num%10
//         num=Math.floor(num/10)
//     }
//     if(sum.toString().length>1) {
//        return sum && addDigits(sum)
//     }
    
//     return sum 
     let numArr = num.toString().split("");
    let number = 0;
    
    if(numArr.length === 1){
        return parseInt(numArr[0])
    }
    
    while(numArr.length > 1){
        let s = 0;
        numArr.forEach(n => {
            s += parseInt(n);
        });
        number = s;
        console.log(number)
        numArr = number.toString().split("");
    }
    return number
};