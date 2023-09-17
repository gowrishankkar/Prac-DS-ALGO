/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        console.log(l, r);
        if (s[l] !== s[r]) {
            const skipL = s.slice(l + 1, r + 1);
            console.log('skipL', skipL)
            const skipR = s.slice(l, r);
             console.log('skipR', skipR)
            return isPalindrome(skipL) || isPalindrome(skipR);
        }
        l++;
        r--;
    }
    return true;
};
const isPalindrome = (s) => {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

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