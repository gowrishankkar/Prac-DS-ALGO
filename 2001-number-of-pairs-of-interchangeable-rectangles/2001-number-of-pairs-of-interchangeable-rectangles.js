/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = (rectangles) => {

    const ratioFrequency = {};

    for (let i = 0; i < rectangles.length; i++) {
        const ratio = rectangles[i][1] / rectangles[i][0];
        if (ratioFrequency[ratio.toString()]) {
            ratioFrequency[ratio.toString()] += 1;
        } else {
            ratioFrequency[ratio.toString()] = 1;
        }
    }

    let totalPair = 0;
    for (const key in ratioFrequency) {
        if (ratioFrequency[key] !== 1) {
            totalPair += (ratioFrequency[key] * (ratioFrequency[key] - 1)) / 2;
        }
    }

    return totalPair;
};