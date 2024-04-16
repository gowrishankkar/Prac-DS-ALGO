/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
if(s.length===0) return ""
let rev = s.split("").reverse().join("")
for(let i = 0 ; i <s.length ; i++){
  if(s.slice(0,s.length-i) === rev.slice(i)){
    return rev.slice(0,i)+s
  }
}
}
