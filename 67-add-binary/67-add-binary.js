/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//     var lena = a.length - 1,
//         lenb = b.length - 1,
//         res = [],
//         count = 0;
    
//     while(lena >= 0 || lenb >= 0 || count > 0){
//         var va = 0,
//             vb = 0;
            
//         if(lena >= 0){
//             a.charAt(lena) === '0' ? va = 0 : va = 1;
//             lena--;
//         }

//         if(lenb >= 0){
//             b.charAt(lenb) === '0' ? vb = 0 : vb = 1;
//             lenb--;
//         }
    
//         if(va+vb+count > 1){
//             var digit = (va+vb+count - 2);
//             res.push(digit);
//             count = 1;
//         }else {
//             res.push(va+vb+count);
//             count = 0;
//         }

//     }
//     //while
//     return res.reverse().join('').toString();
    
    
    let res = '';
    let i = a.length -1, j = b.length - 1;
    let sum , carry = 0;
    
    while( i>=0 || j>=0){
        sum = carry 
        if(i>=0) sum += a[i] - '0';
        if(j>=0) sum += b[j] - '0';
        res += (sum%2).toString();
        carry = sum> 1 ? 1 : 0;
        i--;
        j--;
    }
    if(carry) res += carry.toString();
      return res.split('').reverse().join('').toString();
};