/**
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function (s) {
//     let l = 0;
//     let r = s.length - 1;

//     while (l < r) {
//         console.log(l, r);
//         if (s[l] !== s[r]) {
//             const skipL = s.slice(l + 1, r + 1);
//             console.log('skipL', skipL)
//             const skipR = s.slice(l, r);
//              console.log('skipR', skipR)
//             return isPalindrome(skipL) || isPalindrome(skipR);
//         }
//         l++;
//         r--;
//     }
//     return true;
// };
// const isPalindrome = (s) => {
//     let l = 0;
//     let r = s.length - 1;

//     while (l < r) {
//         if (s[l] !== s[r]) {
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// };

// var validPalindrome = function(s) {
//     if(checkPalindrome(s)) return true;
//     for(let i=0;i<s.length/2;i++){
//         if(s.charAt(i)!=s.charAt(s.length-1-i))
//             return checkPalindrome(s.substring(0,i)+s.substring(i+1)) || 
//                 checkPalindrome(s.substring(0,s.length-1-i)+s.substring(s.length-i));
//     }
// };
// var checkPalindrome = function(s){
//     for(let i=0;i<s.length/2;i++){
//         if(s.charAt(i)!=s.charAt(s.length-1-i)) return false;
//     }
//     return true;
// }


var validPalindrome = function(s) {
let start = 0
let end = s.length - 1

const check = (left, right, str) => {
    while(left < right) {
    if(str[left] !== str[right]) return false
    left++
    right--
    }
    return true
}

while (start < end) {
    if(s[start] !== s[end]) {
       const checkLeft = check(start + 1, end, s)
       const checkRight = check(start, end - 1, s)
       return checkLeft || checkRight
    }
    start++
    end--
}
return true
};