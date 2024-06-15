class MaxHeap{
    constructor(){
        this.size = 0;
        this.array = new Array();
    }

    enqueue(val){
        this.array.push(val);

        this.increaseHeapSize();
        
        this.percolateUp(this.size-1);
    }

    dequeue(){

        let topHeapValue = this.array[0];
        this.array[0] = this.array[this.size-1];

        this.array.pop();

        this.decreaseHeapSize();
        this.percolateDown(0);
        return topHeapValue;
    }

    //stop when: 
    //if the element is at the leaf, or its left and right child is smaller than itself
    percolateDown(idx){
        let largestValIdx = idx;
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;

        if(leftChildIdx < this.size && this.array[leftChildIdx] > this.array[largestValIdx])
            largestValIdx = leftChildIdx;
            
        if(rightChildIdx < this.size && this.array[rightChildIdx] > this.array[largestValIdx])
            largestValIdx = rightChildIdx;

        if(largestValIdx != idx){
            this.swapParentWithChild(largestValIdx, idx);
            this.percolateDown(largestValIdx);
        }
    }

    //stop when:
    //if element at root, or its parent node((idx-1)/2) is bigger than itself
    percolateUp(idx){
        
        while(idx > 0 && this.array[Math.floor((idx-1) / 2)] < this.array[idx]){
            this.swapParentWithChild(Math.floor((idx-1) / 2), idx);
            idx = Math.floor((idx-1) / 2);
        }
    }

    getSize(){
        return this.size;
    }

    increaseHeapSize(){
        this.size++;
    }

    decreaseHeapSize(){
        this.size--;
    }

    isEmpty(){
        return this.size === 0;
    }

    swapParentWithChild(parentIdx, childIdx){
        let temp = this.array[childIdx];
        this.array[childIdx] = this.array[parentIdx];
        this.array[parentIdx] = temp; 
    }

    peak(){
        return this.array[0];
    }
}

class MinHeap{
    constructor(){
        this.size = 0;
        this.array = new Array();
    }

    enqueue(val){
        this.array.push(val);

        this.increaseHeapSize();
        
        this.percolateUp(this.size-1);

    }

    dequeue(){

        let topHeapValue = this.array[0][1]; 
        this.array[0] = this.array[this.size-1];
        this.array.pop();

        this.decreaseHeapSize();
        this.percolateDown(0);
        return topHeapValue;
    }

    //stop when: 
    //if the element is at the leaf, or its left and right child is bigger than itself
    percolateDown(idx){
        let smallestValIdx = idx;
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;

        if(leftChildIdx < this.size && this.array[leftChildIdx][0] < this.array[smallestValIdx][0])
            smallestValIdx = leftChildIdx;
            
        if(rightChildIdx < this.size && this.array[rightChildIdx][0] < this.array[smallestValIdx][0])
            smallestValIdx = rightChildIdx;

        if(smallestValIdx != idx){
            this.swapParentWithChild(smallestValIdx, idx);
            this.percolateDown(smallestValIdx);
        }
    }

    //stop when:
    //if element at root, or its parent node((idx-1)/2) is smaller than itself
    percolateUp(idx){
        
        while(idx > 0 && this.array[Math.floor((idx-1) / 2)][0] > this.array[idx][0]){
            this.swapParentWithChild(Math.floor((idx-1) / 2), idx);
            idx = Math.floor((idx-1) / 2);
        }
    }

    getSize(){
        return this.size;
    }

    increaseHeapSize(){
        this.size++;
    }

    decreaseHeapSize(){
        this.size--;
    }

    isEmpty(){
        return this.size === 0;
    }

    swapParentWithChild(parentIdx, childIdx){
        let temp = this.array[childIdx];
        this.array[childIdx] = this.array[parentIdx];
        this.array[parentIdx] = temp; 
    }

    peak(){
        return this.array[0][0];
    }
}



/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let minHeap = new MinHeap();
    let maxHeap = new MaxHeap();

    for(let i = 0; i < profits.length; i++){
        let capitalProfits = new Array();
        capitalProfits.push(capital[i]);
        capitalProfits.push(profits[i]);
        minHeap.enqueue(capitalProfits);
    }

    for(let i = 0; i < k; i++){

        while(!minHeap.isEmpty() && minHeap.peak() <= w){
            let profit = minHeap.dequeue();
            maxHeap.enqueue(profit);
        }   

        if(maxHeap.isEmpty())
            break;
            
        w += maxHeap.dequeue();
    }

    return w;
};
