/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
        let h3 = new ListNode('dummy')
        let t = h3;
        let p1 = list1
        let p2 = list2
        while (p1 && p2) {
            if (p1.val < p2.val) {
                t.next = p1;
                p1 = p1.next;
                t = t.next
            } else {
                t.next = p2;
                p2 = p2.next;
                t = t.next
            }
        }
        if(p2 === null) t.next= p1
        else t.next = p2
        return h3.next;
};