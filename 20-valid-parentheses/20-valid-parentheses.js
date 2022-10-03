/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, stack = []) {
//         for (const bracket of s.split('')) {/* Time O(N) */
//         const isParenthesis = bracket === '(';
//         if (isParenthesis) stack.push(')');  /* Space O(N) */

//         const isCurlyBrace = bracket === '{';
//         if (isCurlyBrace) stack.push('}');   /* Space O(N) */

//         const isSquareBracket = bracket === '[';
//         if (isSquareBracket) stack.push(']');/* Space O(N) */

//         const isOpenBracket = isParenthesis || isCurlyBrace || isSquareBracket;
//         if (isOpenBracket) continue;

//         const isEmpty = !stack.length;
//         const isWrongPair = stack.pop() !== bracket;
//         const isInvalid = isEmpty || isWrongPair;
//         if (isInvalid) return false;
//     }
//     return stack.length === 0;
    

    
    const checkCar = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    
    for(let i = 0; i < s.length; i++){
    if(['(', '{', '['].includes(s[i])){
          stack.push(s[i])
        } else {
            let match = checkCar[s[i]]
            
            let c2 = stack.pop()
            
            if(c2 !== match)
                return false
            
            
        }
    }
    if(stack.length > 0)
        return false
    
    return true
};