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
// var swapPairs = function(head) {
//     let nHead = new ListNode(-1);
//     nHead.next = head;
//     let c = nHead;
//     let a = new ListNode(-1);
//     let b = new ListNode(-1);
//     while(c.next !== null&& c.next.next !== null){
//       a = c.next;
//       b = c.next.next;
//       a.next = b.next;
//       b.next = a;
//       c.next = b;
//       c = c.next.next;
//     }
//     return nHead.next;
// };




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
/*
Maintain two pointers, curr and prev pointer
At each step, prev.next = curr.next, curr.next = prev,

O(n) time, O(1) space
*/
// var swapPairs = function(head) {
//     if (head === null) {
//         return head
//     }

//     const dummy = new ListNode(0, head);
//     let prev = dummy, slow = head, fast = head.next;
//     while (fast !== null) {
//         prev.next = fast;
//         prev = slow;
//         slow.next = fast.next;
//         fast.next = slow;
//         slow = slow.next;
//         fast = slow === null ? null : slow.next
//     }
//     return dummy.next;
// };


var swapPairs = function(head) {
        let dummy = new ListNode(0, head);
        let [prev, curr] = [dummy, head];
        if(!head || !head.next ) return head;
        while (curr && curr.next) {
            let nextPair = curr.next.next;
            let second = curr.next;
            
            second.next = curr;
            curr.next = nextPair;
            prev.next = second;
            
            prev= curr;
            curr = nextPair;
        }
        return dummy.next;
};


  