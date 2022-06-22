/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const decoded = [first]
    for (let i = 0; i < encoded.length; i++) decoded.push(decoded[i]^encoded[i])
    return decoded
};