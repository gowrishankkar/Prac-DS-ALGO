/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
     return points.sort(([x1, y1], [x2, y2]) => {
        return x1 * x1 + y1 * y1 - x2 * x2 - y2 * y2
    }).slice(0, k)
};