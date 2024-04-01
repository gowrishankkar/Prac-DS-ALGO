var reverseWords = function(s) {
    let arr = s.split(" ").filter(elem => elem !== "");
    return arr.reverse().join(" ");
};