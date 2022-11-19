/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens, stack = []) {
    for (const char of tokens) {/* Time O(N) */
        const isOperation = char in OPERATORS;
        if (isOperation) {
            const value = performOperation(char, stack);

            stack.push(value);      /* Space O(N) */

            continue;
        }

        stack.push(Number(char));   /* Space O(N) */
    }

    return stack.pop();
}

var OPERATORS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
};

var performOperation = (char, stack) => {
    const [ rightNum, leftNum ] = [ stack.pop(), stack.pop() ];
    const operation = OPERATORS[char];

    return operation(leftNum, rightNum);
}