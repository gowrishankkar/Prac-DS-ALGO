/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const { stack, maxArea } = fillStack(heights);        /* Time O(N) | Space O(N) */

    return getMaxArea(heights, stack, maxArea);           /* Time O(N) */
};

const fillStack = (heights, stack = [], maxArea = 0) => {
    for (let index = 0; index < heights.length; index++) {/* Time O(N + N) */
        let start = index;

        const isCurrHeightLess = ([ prevIndex, prevHeight ], currHeight) =>  currHeight < prevHeight;
        const canShrink = () => isCurrHeightLess(stack[stack.length - 1], heights[index]);
        while (stack.length && canShrink()) {             /* Time O(N + N) */
            const [ _index, _height ] = stack.pop();
            const width = index - _index;
            const area = _height * width;

            maxArea = Math.max(maxArea, area);
            start = _index;
        }

        stack.push([ start, heights[index] ]);            /* Space O(N) */
    }

    return { stack, maxArea }
}

const getMaxArea = (heights, stack, maxArea) => {
    for (const [ index, height ] of stack) {              /* Time O(N) */
        const width = heights.length - index;
        const area = height * width;

        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

