// var reverseWords = function(s) {
//     let arr = s.split(" ").filter(elem => elem !== "");
//     return arr.reverse().join(" ");
// };
var reverseWords = function(s) {
    const ss = s.split(' ');
    return ss.filter(e => e !== '').map(e => e.trim()).reverse().join(' ');
};