/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    for(const num of nums) {
        const freq = freqMap.has(num) ? freqMap.get(num) + 1: 1;
        freqMap.set(num, freq);
    }
    const heap = new MaxHeap([...freqMap.entries()]);
    let ans = []
    while(ans.length < k){
        ans.push(heap.pop().value);
    }
    return ans;

};


class MaxHeap {
    constructor(arr) {
        this.heap = [];
        this.size = 0;
        for(const item of arr) {
            this.push({
                freq: item[1],
                value: item[0]
            })
        }
    }
    push(value) {
        this.heap.push(value);
        if(this.size === 0) {
            ++this.size;
            return;
        }
        this.siftDown(this.size++)
    }
    siftDown(curr) {
        const parent = Math.floor((curr-1)/2);
        if(parent < 0) return;
        if(this.heap[parent].freq < this.heap[curr].freq) {
            [this.heap[parent], this.heap[curr]] = [this.heap[curr], this.heap[parent]];
            this.siftDown(parent);
        }
    }
    pop() {
        [this.heap[0], this.heap[this.size-1]] = [this.heap[this.size-1], this.heap[0]];
        const value = this.heap.pop();
        --this.size;
        this.siftUp(0);
        return value;
    }
    siftUp(parent) {
        if(parent >= this.size) return;
        const child1 = parent * 2 +1;
        const child2 = child1 + 1;
        let minIndex = parent;
        let minVal = this.heap[minIndex];
        if(child1 < this.size && this.heap[child1].freq > minVal.freq) {
            minIndex = child1;
            minVal = this.heap[child1];
        }
        // console.log(this.heap, child2)
        if(child1 < this.size && child2 < this.size && this.heap[child2].freq > minVal.freq) {
            minIndex = child2;
            minVal = this.heap[child2];
        }
        if(minIndex !== parent) {
             [this.heap[minIndex], this.heap[parent]] = [this.heap[parent], this.heap[minIndex]];
            this.siftUp(minIndex)
        }
    }
}