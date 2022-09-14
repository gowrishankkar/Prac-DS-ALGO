/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        return (dividend === -2147483648) ? 2147483647 : -dividend;
    }
    let ret = 0;
    let positiveDividend = dividend >= 0;
    let positiveDivisor = divisor >= 0;
    let negRes = positiveDividend ? !positiveDivisor : positiveDivisor;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend === divisor) return negRes ? -1 : 1;

    while (dividend >= 0) {
        dividend -= divisor;
        ret++;
    }
    return negRes ? -ret + 1 : ret - 1;
};