/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let n = right - left + 1;
    let countLeft = 1;
    let leftList = head;
    let prevLeft = new ListNode(0);
    prevLeft.next = head;
    let ans = prevLeft;
    while (countLeft < left) {
        prevLeft = leftList;
        leftList = leftList.next;
        countLeft += 1;
    }
    
    let prev = null
    let curr = leftList;
    let next = null;
    while (n) {
        next = leftList.next;
        leftList.next = prev;
        prev = leftList;
        leftList = next;
        n -= 1;
    }

    prevLeft.next = prev;
    curr.next = leftList;
    return ans.next;
};