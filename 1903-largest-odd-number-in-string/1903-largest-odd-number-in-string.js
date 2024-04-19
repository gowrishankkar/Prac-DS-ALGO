/**
 * @param {string} num
 * @return {string}
 */
// var largestOddNumber = function(num) {
//     let i = num.length - 1
//     while (i >= 0 && !(num.charCodeAt(i) % 2)) {
//         i--
//     }
//     return num.slice(0, ++i)
// };

// var largestOddNumber = function(num) {
//      for(let i =num.length-1;i>=0;i--){
//         if(num[i]%2!=0){
//             console.log(num[i])
//             return num.substring(0,i+1);
//         }
//     }
//     return ""
// };

var largestOddNumber = function(num) {
    let largest = "";

    // Start checking from the end of the string
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            largest = num.substring(0, i + 1);
            break;
        }
    }

    return largest;
};