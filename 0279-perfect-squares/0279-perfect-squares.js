/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let minSquaresRequired = new Array(n + 1);

        minSquaresRequired[0] = 0;

        minSquaresRequired[1] = 1;

        for (let i = 2; i <= n; ++i) {

            minSquaresRequired[i] = Number.MAX_VALUE;

            for (let j = 1; i - (j * j) >= 0; ++j) {

                minSquaresRequired[i]
                    = Math.min(minSquaresRequired[i],
                        minSquaresRequired[i - (j * j)]);
            }

            minSquaresRequired[i] += 1;
        }

        let result = minSquaresRequired[n];
        return result;
};