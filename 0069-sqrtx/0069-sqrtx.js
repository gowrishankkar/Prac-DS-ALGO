/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }

    if (x <= 3) {
        return 1;
    }

    let min = 2;
    let max = Math.floor(x / 2);

    if (min === max) {
        return min;
    }

    let currentValue = min + Math.round((max - min) / 2);

    while (currentValue * currentValue !== x && max - min !== 1) {
        if (currentValue * currentValue > x) {
            max = currentValue;
            currentValue = min + Math.round((max - min) / 2);
            continue;
        }

        if (currentValue * currentValue < x) {
            min = currentValue;
            currentValue = min + Math.round((max - min) / 2);
            continue;
        }
    }

    if (currentValue * currentValue > x) {
        return min;
    }

    return currentValue;
};