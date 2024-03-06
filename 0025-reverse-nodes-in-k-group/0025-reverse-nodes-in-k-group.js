/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = head;
    let prevLast = null;
    while (temp !== null) {
        let kThNode = getKthNode(temp, k);
        if (kThNode === null) {
            if (prevLast) {
                prevLast.next = temp;
            }
            break;
        }
        let nextNode = kThNode.next;
        kThNode.next = null;
        reverseLinkedList(temp);
        if (temp === head) {
            head = kThNode;
        } else {
            prevLast.next = kThNode;
        }
        prevLast = temp;
        temp = nextNode;
    }
    return head;
};
    
    
function getKthNode(temp, k) {
    k -= 1;
    while (temp !== null && k > 0) {
        k--;
        temp = temp.next;
    }
    return temp;
}
    
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
}