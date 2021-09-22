/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = x >= 0 ? Number((''+x).split('').reverse().join('')) : Number('-'+(''+x).substr(1).split('').reverse().join(''));
    if ( res >= Math.pow(2,31)-1 || res <= -(Math.pow(2,31)-1) ) return 0;
    else return res;
   
};