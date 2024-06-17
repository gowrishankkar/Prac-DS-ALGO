/**
 * @param {number} c
 * @return {boolean}
 */
// var judgeSquareSum = function(c) {
    
    
//     for(let i = 0; i <= c; i++){
//         let a = i * i;
//         if(a <= c){
//             for(let j = 0; j <= c; j++){
//                 let b = j * j;
//                 // console.log('a',a, b, a+b, c)
//                    console.log('a',i, j)
//                 if(a + b === c){
             
//                     return true;
//                 }
//             }      
//         }
       
//     }
//     return false;
// };

var judgeSquareSum = function(c) {
    if(c===1 || c===0)return true;
    for(let i =0; i*i <= c; i++){
        let square = i*i;
        if(isPerfectSquare(c-square)) return true
    }
    return false
};


var isPerfectSquare = function (num) {
  if (num === 1 || num === 0) return true;
  let start = 1;
  let end = num;
  while (start <= end) {
    // overflow bug prevention
    let middle = Math.floor(start + (end - start) / 2);
    if (middle * middle === num) return true;
    else if (num > middle * middle) start = middle + 1;
    else end = middle - 1;
  }
  return false;
};