/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let str = {
        1: '1',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
        0: '0'
    }
    let result = []
    
    function backtrack(i, curr){
        if(i === digits.length){
            result.push(curr)
            return
        }
        
        str[digits[i]].split('').forEach(c => backtrack(i + 1, curr + c))
    }
    
    if(digits.length) backtrack(0, [])
    
    return result
    
};