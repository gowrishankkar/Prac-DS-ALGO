/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(A, B) {
    let res = '';
        let i = A.length - 1, j = B.length - 1;
        let sum, carry = 0;

        while (i >= 0 || j >= 0) {
            sum = carry
            if (i >= 0) sum += A[i] - '0';
            if (j >= 0) sum += B[j] - '0';
            res += (sum % 2).toString();
            carry = sum > 1 ? 1 : 0;
            i--;
            j--;
        }
        if (carry) res += carry.toString();
        return res.split('').reverse().join('').toString();
};