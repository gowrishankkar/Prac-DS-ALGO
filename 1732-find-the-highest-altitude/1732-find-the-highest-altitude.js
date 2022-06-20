/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let height = 0;
    let gainArr = [0];
    gain.forEach((ele) =>{
        // console.log(ele)
        height += ele
        gainArr.push(height)
    })
    console.log('gainArr', gainArr)
    return Math.max(...gainArr)
};