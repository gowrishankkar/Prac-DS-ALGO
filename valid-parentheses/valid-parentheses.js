/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        const stack = []
    const open = {
        "(": true,
        "{": true,
        "[": true
    }
    const corresponding = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    for (let i = 0; i < s.length; i++) {
        if (open[s[i]]) {
            stack.push(s[i])
        } else if (stack.length == 0) {
            return false
        } else if (corresponding[s[i]] == stack[stack.length - 1]) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length == 0
};