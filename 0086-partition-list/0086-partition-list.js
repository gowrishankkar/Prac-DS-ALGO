/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  const lessHead = new ListNode(), greaterEqualHead = new ListNode();
  let lessP = lessHead, greaterEqualP = greaterEqualHead, curr = head;
  while (curr) {
    if (curr.val >= x) {
      greaterEqualP.next = curr;
      greaterEqualP = greaterEqualP.next;
    } else {
      lessP.next = curr;
      lessP = lessP.next;
    }
    curr = curr.next;
  }
  lessP.next = greaterEqualHead.next;
  greaterEqualP.next = null;
  return lessHead.next;
};