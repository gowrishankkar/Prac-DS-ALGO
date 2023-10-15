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
var insertionSortList = function(head) {
    let dummy = new ListNode();
    let prev = dummy;
    let curr = head;
    let next = null;
    
    while(curr!==null){
        next = curr.next;
        while(prev.next && prev.next.val<curr.val){
            prev = prev.next;
        }
        curr.next = prev.next;
        prev.next = curr;
        prev = dummy;
        curr = next;
    }
    return dummy.next;
};
