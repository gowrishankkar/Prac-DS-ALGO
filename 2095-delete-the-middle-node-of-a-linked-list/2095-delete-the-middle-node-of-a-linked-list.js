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
// var deleteMiddle = function(head) {
//     let dummy = new ListNode(null, head);    
//     let slow = dummy;
//     let fast = dummy;
//     while(fast?.next?.next) {        
//         slow = slow.next;
//         fast = fast.next.next;
//     }       
//     slow.next = slow.next.next;    
//     return dummy.next;    
// }
var deleteMiddle = function(head) 
{
    let n = 0, p = head;
    while(p)
    {
        n++;
        p = p.next;
    }
    let preceding = Math.floor(n/2);
    let start = new ListNode(0,head);
    p = start;
    for(let i=0; i<preceding; i++)
        p = p.next;
    p.next = p.next.next;
    
    return start.next;
};