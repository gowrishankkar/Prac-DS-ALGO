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
// var sortList = function(head) {
//      return sortL(head);
// };

// const merge = (l1, l2) => {
//     let dummy = new ListNode();
//     let curr = dummy, a = l1, b = l2;
//     while(a && b){
//         if(a.val < b.val){
//             curr.next = a;
//             a = a.next
//         }else {
//             curr.next = b;
//             b = b.next
//         }
//         curr = curr.next;
//     }
//     curr.next = a || b;
//     return dummy.next;
   
// }

// const sortL = head => {
//     if (!head || !head.next) return head;
//     let pre = null, slow = head, fast = head;
//     while(fast && fast.next){
//         pre = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     pre.next = null;
//     return merge(sortL(head), sortL(slow))
// };


var sortList = function(head) {
     return sortL(head);
};

const merge = (l1, l2) => {
    let dummy = new ListNode(),
        head = dummy;

    while (l1 && l2) {
        // find the smaller node
        if (l1.val <= l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    // add the remaining nodes
    head.next = l1 ? l1 : l2;
    return dummy.next;
}

const sortL = head => {
    if (!head || !head.next) {
        return head;
    }
    let pre = head,
        fast = head,
        slow = head;
    
    // find the middle node
    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    pre.next = null;
    return merge(sortL(head), sortL(slow));
};

