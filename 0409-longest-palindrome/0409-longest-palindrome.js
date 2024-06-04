/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = new Map();

    let result = 0;
    let seenOne = false;
    let odd = 0;

    for(let i = 0; i < s.length; i++){
        if(hash.has(s[i])){
            hash.set(s[i], hash.get(s[i]) + 1)
        } else {
            hash.set(s[i], 1)
        }
    }

    for(let value of hash.values()){
        if(value == 1 && !seenOne){
            seenOne = true
            if(odd != 0) result += odd-1
            continue
        }

        if(value % 2 == 0){
            result += value
            continue
        }

        if(value % 2 != 0){
            if(odd == 0 && !seenOne){
                odd = value
            } else {
                result += value-1
            }
        }
    }
    
    return seenOne ? result+1 : result+odd;
};