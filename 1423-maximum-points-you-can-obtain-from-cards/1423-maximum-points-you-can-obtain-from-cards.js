/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
     let arr = cardPoints;
        let leftSum = 0
        for (let i = 0; i < k; i++) {
            leftSum += arr[i]
        }
        let leftPointer = k - 1;
        let rightPointer = arr.length - 1
        let max = leftSum;
        while (leftPointer >= 0) {
            leftSum = leftSum - arr[leftPointer];
            leftSum = leftSum + arr[rightPointer];
            leftPointer--;
            rightPointer--;
            if (leftSum > max) max = leftSum
        }

        // console.log('leftSum', max)
        return max
    
};