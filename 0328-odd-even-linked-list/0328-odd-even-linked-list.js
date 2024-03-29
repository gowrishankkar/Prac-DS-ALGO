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
// var oddEvenList = function(head) {
//     if(!head || !head.next) return head;
//     let odd = head;
//     let even = head.next;
//     let evenHead = head.next;
//     while(even && even.next){
//         odd.next =  odd.next.next;
//         even.next =  even.next.next;
//         odd = odd.next;
//         even = even.next;
//     }
    
//     odd.next = evenHead;
//     return head;
// };


var oddEvenList = function (head) {
    if (!head) return head;

    let odd = head;
    let even = head.next;
    while (odd.next && odd.next.next) {
        let tmp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        tmp.next = odd.next;
    }
    odd.next = even;
    return head;
};