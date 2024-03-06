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
// var rotateRight = function(head, k) {
//     if (head == null || head.next == null) return head;
//     let tail = head;
//     let n = 1;
//     while(tail.next){
//         tail = tail.next;
//         n++;
//     }
    
//     if(k % n == 0) return head;
    
//     k = k % n;
    
//     tail.next =  head;
//     let lastNode =  findNthNode(head, n - k)
//     head = lastNode.next;
//     lastNode.next = null;
//     return head;
    
// };


// function findNthNode(head, n){
//     let count = 1;
//     while(head){
//         if(count == n ) return head;
//         count++;
//         head = head.next;
//     }
//     return head;
// }



var rotateRight = function(head, k) {
    if (!head) return null;
    if (!head?.next  || k === 0) return head;
    
    let length = 0;
    let curr = head;

    while (curr) {
        length++;
        curr = curr.next
    }

    k = k < length ? k : k % length;
    if (k === 0) return head;

    curr = head
    while (curr) {
        if (!curr?.next?.next) {
            const value = curr?.next?.val;
            const node = new ListNode(value);
            curr.next = null;
            node.next = head
            head = node;
            curr = head;
            k--;
            if (k === 0) break;
        }
        curr = curr.next
    }
    return head;
};