/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
    let ans = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let xor = arr[i]
        for (let k = i + 1; k < arr.length; k++) {
            xor ^= arr[k]
            if (xor == 0) {
                ans += (k - i);
            }
        }
    }
    return ans
};