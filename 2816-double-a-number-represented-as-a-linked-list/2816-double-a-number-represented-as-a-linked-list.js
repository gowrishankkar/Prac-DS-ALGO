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
var doubleIt = function(head) {
    let current = head;
    let number = '';
    let i = 0;

    while (current) {
        number += current.val;
        current = current.next;
    }

    number = (BigInt(number)* 2n).toString();

    current = head;

    while (i < number.length) {
        if (i !== number.length - 1  && !current.next) {
            current.next = new ListNode();
        }
        current.val = number[i];
        i++;
        current = current.next;
    }

    return head;
};