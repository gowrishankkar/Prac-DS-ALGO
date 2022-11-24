class MinStack {
    constructor () {
        this.head = null
    }

    push (val) {
        this.head = (!this.head)   /* Space O(1) */
            ? new Node(val, val, null)
            : new Node(val, Math.min(val, this.head.min), this.head);
    }

    pop () {
        this.head = this.head.next;/* Time O(1) */
    }

    top () {
        return this.head.val;      /* Time O(1) */
    }

    getMin () {
        return this.head.min;      /* Time O(1) */
    }
}

class Node {
    constructor (val, min, next) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}
/** 
 * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

