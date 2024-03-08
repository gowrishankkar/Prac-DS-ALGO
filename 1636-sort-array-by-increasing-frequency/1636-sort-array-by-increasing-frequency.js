/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {}, ans = [];
    let minHeap = new MinPriorityQueue({
        compare: (w1, w2) => {
            if (w1.count < w2.count)  return -1;
            if (w1.count > w2.count)  return 1;
            return w1.num < w2.num
                ? 1
                : -1;		
        }
    });
    nums.forEach((num) =>  map[num] = (map[num] || 0) + 1 )

    for(let [key, value] of Object.entries(map)){
        minHeap.enqueue({ num: Number(key), count:  value},);
    }

    while(!minHeap.isEmpty()){
        let { num, count} = minHeap.dequeue()
        let arr = new Array(count).fill(num)
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