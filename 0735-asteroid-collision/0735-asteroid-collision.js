var asteroidCollision = function (aster) {
    const stack = [], n = aster.length;

    for (let i = 0; i < n; i++) {
        if (stack.length && stack.at(-1) > 0 && aster[i] < 0) {
            if (Math.abs(stack.at(-1)) <= Math.abs(aster[i])) {
                while (stack.length && stack.at(-1) > 0 && Math.abs(stack.at(-1)) < Math.abs(aster[i])) {
                    stack.pop();
                }
                if (!stack.length || stack.at(-1) < 0) {
                    stack.push(aster[i]);
                    continue;
                }
                if (Math.abs(stack.at(-1)) === Math.abs(aster[i])) {
                    stack.pop();
                }
            }

        } else {
            stack.push(aster[i]);
        }
    }

    return stack;
};