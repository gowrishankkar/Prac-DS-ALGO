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
var sortList = function(head) {
     return sortL(head);
};

const merge = (l1, l2) => {
    let dummy = new ListNode();
    let curr = dummy, a = l1, b = l2;
    while(a && b){
        if(a.val < b.val){
            curr.next = a;
            a = a.next
        }else {
            curr.next = b;
            b = b.next
        }
        curr = curr.next;
    }
    curr.next = a || b;
    return dummy.next;
   
}

const sortL = head => {
    if (!head || !head.next) return head;
    let pre = null, slow = head, fast = head;
    while(fast && fast.next){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return merge(sortL(head), sortL(slow))
};

