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
var middleNode = function(head) {
    let curr = head
    let fast = head
    while (fast.next && fast.next.next) {
        curr = curr.next
        fast = fast.next.next
    }
    return fast.next ? curr.next : curr
};