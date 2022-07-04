/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

    let sum = 0
    for (let i = 0; i <= arr.length -1 ; i++) {
  
             // console.log('i', i)
            for (let j = arr.length -1; j >=i ; j--){
                let tmp = (arr.slice(i, j + 1));
                if (tmp.length % 2 != 0) {
                    sum += tmp.reduce((a, b) => a + b, 0)
                }
            }
        
     
        
    }
    console.log('sum', sum)
    return sum
    

};