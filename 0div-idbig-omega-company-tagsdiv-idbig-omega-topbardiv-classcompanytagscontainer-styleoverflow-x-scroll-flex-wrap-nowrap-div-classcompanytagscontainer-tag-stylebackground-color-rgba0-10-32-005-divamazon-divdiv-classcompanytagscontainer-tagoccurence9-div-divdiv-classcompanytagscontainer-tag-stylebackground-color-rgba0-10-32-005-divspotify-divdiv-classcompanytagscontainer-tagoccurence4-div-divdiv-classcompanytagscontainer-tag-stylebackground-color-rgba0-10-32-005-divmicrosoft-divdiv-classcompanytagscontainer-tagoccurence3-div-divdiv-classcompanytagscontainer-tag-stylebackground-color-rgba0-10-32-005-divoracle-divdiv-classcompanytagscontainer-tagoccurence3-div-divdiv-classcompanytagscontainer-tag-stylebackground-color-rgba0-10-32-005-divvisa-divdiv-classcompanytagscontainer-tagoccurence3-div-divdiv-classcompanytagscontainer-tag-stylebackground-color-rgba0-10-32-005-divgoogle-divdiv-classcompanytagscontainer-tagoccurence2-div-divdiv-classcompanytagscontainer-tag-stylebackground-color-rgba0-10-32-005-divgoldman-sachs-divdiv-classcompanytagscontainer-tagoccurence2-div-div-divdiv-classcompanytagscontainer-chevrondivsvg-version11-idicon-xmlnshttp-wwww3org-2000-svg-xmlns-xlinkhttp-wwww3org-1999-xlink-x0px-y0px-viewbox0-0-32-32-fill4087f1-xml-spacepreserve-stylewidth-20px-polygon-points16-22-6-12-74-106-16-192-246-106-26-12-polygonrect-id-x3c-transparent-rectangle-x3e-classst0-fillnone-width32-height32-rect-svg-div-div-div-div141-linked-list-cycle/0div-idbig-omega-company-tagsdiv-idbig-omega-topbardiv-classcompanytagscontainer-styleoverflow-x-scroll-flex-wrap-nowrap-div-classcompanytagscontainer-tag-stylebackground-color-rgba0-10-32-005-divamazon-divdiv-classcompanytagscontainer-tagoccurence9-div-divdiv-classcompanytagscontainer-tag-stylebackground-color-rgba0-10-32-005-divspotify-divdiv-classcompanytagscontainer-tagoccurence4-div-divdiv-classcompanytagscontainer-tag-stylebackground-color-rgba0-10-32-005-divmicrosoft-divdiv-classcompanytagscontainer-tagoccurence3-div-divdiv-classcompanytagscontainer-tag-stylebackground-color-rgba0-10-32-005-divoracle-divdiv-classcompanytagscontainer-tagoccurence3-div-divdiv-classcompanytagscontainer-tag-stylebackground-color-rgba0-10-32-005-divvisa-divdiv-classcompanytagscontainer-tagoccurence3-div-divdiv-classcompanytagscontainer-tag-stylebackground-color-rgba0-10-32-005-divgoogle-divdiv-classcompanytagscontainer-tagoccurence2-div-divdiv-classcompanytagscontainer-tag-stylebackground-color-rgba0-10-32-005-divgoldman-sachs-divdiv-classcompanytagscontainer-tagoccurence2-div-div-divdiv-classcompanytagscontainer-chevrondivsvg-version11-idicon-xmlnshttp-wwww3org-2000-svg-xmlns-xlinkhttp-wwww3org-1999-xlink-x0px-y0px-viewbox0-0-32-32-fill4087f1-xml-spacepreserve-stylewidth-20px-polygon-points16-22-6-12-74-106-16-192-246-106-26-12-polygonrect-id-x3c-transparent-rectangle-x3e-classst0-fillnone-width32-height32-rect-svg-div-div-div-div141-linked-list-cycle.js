/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     let  seen = new Set()
//     while (head) {/* Time O(N) */
//         if (seen.has(head)) return true;

//         seen.add(head);/* Space O(N) */
//         head = head.next;
//     }

//     return false;
// }


var hasCycle = function(head) {
    let slow = head
    let fast =  head;

    while (fast && fast.next) {/* Time O(N) */
        slow = slow.next;
        fast = fast.next.next;
        if ( slow === fast) return true;
    }

    return false;
};