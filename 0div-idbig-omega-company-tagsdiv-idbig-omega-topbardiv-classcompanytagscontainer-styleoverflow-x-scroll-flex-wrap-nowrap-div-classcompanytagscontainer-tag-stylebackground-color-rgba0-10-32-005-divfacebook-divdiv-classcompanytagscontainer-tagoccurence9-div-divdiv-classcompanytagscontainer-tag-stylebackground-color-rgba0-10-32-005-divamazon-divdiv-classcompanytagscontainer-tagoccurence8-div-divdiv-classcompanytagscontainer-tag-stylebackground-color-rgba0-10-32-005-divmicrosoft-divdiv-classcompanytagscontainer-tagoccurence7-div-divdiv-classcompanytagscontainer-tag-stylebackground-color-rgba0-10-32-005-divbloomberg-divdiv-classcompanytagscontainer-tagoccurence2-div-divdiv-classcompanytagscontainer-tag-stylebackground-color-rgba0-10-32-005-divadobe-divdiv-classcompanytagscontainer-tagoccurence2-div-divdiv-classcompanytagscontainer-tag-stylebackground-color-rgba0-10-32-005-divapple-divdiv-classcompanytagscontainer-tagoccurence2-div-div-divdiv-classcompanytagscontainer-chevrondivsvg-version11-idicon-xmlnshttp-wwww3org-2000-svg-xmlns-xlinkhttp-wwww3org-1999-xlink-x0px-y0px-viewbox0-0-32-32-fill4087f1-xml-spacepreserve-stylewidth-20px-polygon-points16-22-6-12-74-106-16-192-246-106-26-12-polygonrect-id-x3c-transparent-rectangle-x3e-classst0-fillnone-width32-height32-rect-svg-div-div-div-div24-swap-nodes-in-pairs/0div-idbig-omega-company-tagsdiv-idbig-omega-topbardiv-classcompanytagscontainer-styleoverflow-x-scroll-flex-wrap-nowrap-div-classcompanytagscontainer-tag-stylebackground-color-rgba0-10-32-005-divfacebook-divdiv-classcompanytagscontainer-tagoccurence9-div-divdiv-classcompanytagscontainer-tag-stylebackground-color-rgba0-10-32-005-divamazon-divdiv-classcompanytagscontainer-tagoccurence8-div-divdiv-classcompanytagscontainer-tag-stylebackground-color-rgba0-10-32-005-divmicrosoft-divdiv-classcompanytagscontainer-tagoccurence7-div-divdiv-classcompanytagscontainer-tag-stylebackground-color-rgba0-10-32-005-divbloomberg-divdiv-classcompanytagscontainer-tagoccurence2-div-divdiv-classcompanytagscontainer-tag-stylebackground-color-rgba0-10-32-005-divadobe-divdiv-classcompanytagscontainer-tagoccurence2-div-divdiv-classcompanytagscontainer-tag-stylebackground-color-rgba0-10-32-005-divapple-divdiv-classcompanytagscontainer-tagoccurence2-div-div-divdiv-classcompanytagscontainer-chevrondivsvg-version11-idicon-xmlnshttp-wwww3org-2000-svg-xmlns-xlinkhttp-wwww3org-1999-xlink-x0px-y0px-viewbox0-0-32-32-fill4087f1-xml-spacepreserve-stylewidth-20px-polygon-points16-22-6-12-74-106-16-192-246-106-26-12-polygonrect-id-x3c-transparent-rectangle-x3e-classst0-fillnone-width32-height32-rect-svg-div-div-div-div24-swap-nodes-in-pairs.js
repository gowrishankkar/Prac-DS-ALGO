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
var swapPairs = function(head) {
    let nHead = new ListNode(-1);
    nHead.next = head;
    let c = nHead;
    let a = new ListNode(-1);
    let b = new ListNode(-1);
    while(c.next !== null&& c.next.next !== null){
      a = c.next;
      b = c.next.next;
      a.next = b.next;
      b.next = a;
      c.next = b;
      c = c.next.next;
    }
    return nHead.next;
};