/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     const sentinel = new ListNode();

//     sentinel.next = head;

//     const fast = moveFast(sentinel, n);   /* Time O(N) */
//     const slow = moveSlow(sentinel, fast);/* Time O(N) */

//     slow.next = slow.next.next || null;

//     return sentinel.next;
// };

// const moveFast = (fast, n) => {
//     for (let i = 1; i <= (n + 1); i++) {/* Time O(N) */
//         fast = fast.next;
//     }

//     return fast;
// }

// const moveSlow = (slow, fast) => {
//     while (fast) {                     /* Time O(N) */
//         slow = slow.next;
//         fast = fast.next;
//     }

//     return slow;
// }




var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode();
    dummy.next = head;
    let [slow , fast] = [dummy, head];
    while(n > 0 && fast){
        fast = fast.next;
        n--;
    }
    while(fast){
         fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
    
};

