/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, seen = new Set()) {
    while (head) {/* Time O(N) */
        if (seen.has(head)) return true;

        seen.add(head);/* Space O(N) */
        head = head.next;
    }

    return false;
}