/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
      let value = ""
    let curr = head
    
    while(curr){
        value+=curr.val;
        curr=curr.next
    }
    let double = BigInt(2) * BigInt(value)
    double=double.toString()
    curr = head
    let index =0
    let newHead = null
    curr = newHead
    while(index < double.length){
        if(curr){
            curr.next = new ListNode(double[index])
            curr = curr.next
        } else {
            curr  = new ListNode(double[index])
             newHead= curr
        }  
        index++ 
    }
    return newHead
};