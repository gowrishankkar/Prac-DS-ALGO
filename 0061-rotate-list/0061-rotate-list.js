/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || head.next == null) return head;
    let tail = head;
    let n = 1;
    while(tail.next){
        tail = tail.next;
        n++;
    }
    
    if(k % n == 0) return head;
    
    k = k % n;
    
    tail.next =  head;
    let lastNode =  findNthNode(head, n - k)
    head = lastNode.next;
    lastNode.next = null;
    return head;
    
};


function findNthNode(head, n){
    let count = 1;
    while(head){
        if(count == n ) return head;
        count++;
        head = head.next;
    }
    return head;
}