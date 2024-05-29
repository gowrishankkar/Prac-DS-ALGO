/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    
    let zeroExist = function(s) {
        for (let i = s.length - 1; i >= 0; i--) {
            if (s.charAt(i) === '0') {
                return i;
            }
        }
        return -2;
    }
    
    
    let process = function(s) {
        if (s.charAt(s.length - 1) === '0') {
            s = s.slice(0, s.length - 1);
        } else if (s.charAt(s.length - 1) === '1' && s !== '1') {
            if (zeroExist(s) !== -2) {
                let zeroIndex = zeroExist(s);
                let len = s.length;
                s = s.slice(0, zeroIndex).concat('1');
                for (let i = s.length; i < len; i++) {
                    s += '0';
                }
            } else {
                let res = '1';
                for (let i = 0; i < s.length; i++) {
                    res += '0';
                }
                s = res;
            }
        }
        
        return s;
    }
    
    let count = 0;
    
    while (s !== '1') {
        s = process(s);
        count ++;
    }
    
    return count;
    

};
