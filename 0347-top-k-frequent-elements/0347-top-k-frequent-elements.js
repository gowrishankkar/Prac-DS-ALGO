/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let minHeap = new MinPriorityQueue();
    let ans = new Array();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i])+1);
        else
            map.set(nums[i], 1);
    }
    for(let items of map){
        minHeap.enqueue(items[0], items[1]);

        if(minHeap.size() > k){
            minHeap.dequeue();
        }
    }
    while(!minHeap.isEmpty()){
        ans.push(minHeap.dequeue().element);
    }
    return ans;

};
// var topKFrequent = function(nums, k) {
//     let map = new Map();
//     let minHeap = new MinPriorityQueue();
//     let ans = new Array();

//     for(let i = 0; i < nums.length; i++){
//         if(map.has(nums[i]))
//             map.set(nums[i], map.get(nums[i])+1);
//         else
//             map.set(nums[i], 1);
//     }

//     for(let items of map){
//         minHeap.enqueue(items[0], items[1]);

//         if(minHeap.size() > k){
//             minHeap.dequeue();
//         }
//     }

//     while(!minHeap.isEmpty()){
//         ans.push(minHeap.dequeue().element);
//     }

//     return ans;
// };
