/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
    
//     let sentinel_node = new ListNode(0, head);
//     let slow_pointer = sentinel_node;
//     let fast_pointer = null;

//     while (slow_pointer) {
//         // get next legible node
//         fast_pointer = slow_pointer.next;
//         while (fast_pointer && fast_pointer.val === val) {
//             fast_pointer = fast_pointer.next;
//         }

//         // Set next node to the legible node
//         slow_pointer.next = fast_pointer;
//         slow_pointer = slow_pointer.next;
//     }

//     return sentinel_node.next;
// };

// var removeElements = function (head, val) {
    
//     let dummy = new ListNode(0, head);
//     let prev = dummy;
//     let curr = head;

//     while (curr) {

//        if(curr.val == val) prev.next = curr.next;
//        else prev = curr;
//         curr = curr.next;
//     }

//     return dummy.next;
// };



var removeElements = function(head, val) {
    let current = head;
    // Handle scenario, where "bad" nodes are at the beginning of a linked list
    while (current && current.val === val) {
        previous = current;
        current = current.next;
        previous.next = null;
    }

	// Introduce h and point it to the c, which is currently a head of the resulting linked list 
    head = current;
    while (current) {
        if (current.val === val) {
			// Handle case when c points to a "bad" node, where we link p to the next node of c
            previous.next = current.next;
            current = current.next;
        } else {
			// Handle case when c points to a "good" node, where we simply advance to the next node of c 
            previous = current;
            current = current.next;
        }
    }
    return head;

};