/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// var findClosestElements = function(arr, k, x) {
//     let maxHeap = new MaxPriorityQueue();
//     let ans = new Array();
//     for(let i = 0; i < arr.length; i++){
//         maxHeap.enqueue(arr[i], Math.abs(arr[i]-x));
//         if(maxHeap.size() > k)
//             maxHeap.dequeue();
//     }
//     while(!maxHeap.isEmpty()){
//         ans.push(maxHeap.dequeue().element);
//     }
//     return ans.sort((a,b)=> a-b);
// };


var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1
    while (right - left >= k) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right --
        } else {
            left ++
        }
    }
    return arr.slice(left, right + 1);
};