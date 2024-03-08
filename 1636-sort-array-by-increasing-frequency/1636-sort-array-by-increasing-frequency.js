/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
    let minHeap = new MinPriorityQueue({
        compare: (w1, w2) => {
            if (w1.count < w2.count)  return -1;
            if (w1.count > w2.count)  return 1;
            return w1.word < w2.word
                ? 1
                : -1;		
        }
    });
    let ans = new Array();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i])+1);
        else
            map.set(nums[i], 1);
    }
    for(let items of map){
        minHeap.enqueue({ word: items[0], 
		count:  items[1]},);
    }

    while(!minHeap.isEmpty()){
        let { word, count} = minHeap.dequeue()
        let arr = new Array(count).fill(word)
        ans.push(...arr);
    }
    return ans;
};


// var frequencySort = function(nums) {
//     let map = {};
//     let minHeap = new MaxPriorityQueue();
//     let ans = new Array();

//     for(let i = 0; i < nums.length; i++){
//        map[nums[i]] = (map[nums[i]] || 0) + 1;
//     }
//     for(let [key, value] in map){
//         minHeap.enqueue(key, value);
//     }
//     while(!minHeap.isEmpty()){
//         ans.push(minHeap.dequeue().element);
//     }
//     return ans;
// };