/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
     let result = 0;
        let num = 31;
        for (let i = 0; i <= num; i++) {
            if (n % 2 == 1) {      // if its one means ith bit is 1
                result += Math.pow(2, (num - i)); // eg 1 th bit is set then we will be setting 31-1= 30th bit to 1 in reverse bit
            }
            n = Math.floor(n / 2);
        }
        return result;
};