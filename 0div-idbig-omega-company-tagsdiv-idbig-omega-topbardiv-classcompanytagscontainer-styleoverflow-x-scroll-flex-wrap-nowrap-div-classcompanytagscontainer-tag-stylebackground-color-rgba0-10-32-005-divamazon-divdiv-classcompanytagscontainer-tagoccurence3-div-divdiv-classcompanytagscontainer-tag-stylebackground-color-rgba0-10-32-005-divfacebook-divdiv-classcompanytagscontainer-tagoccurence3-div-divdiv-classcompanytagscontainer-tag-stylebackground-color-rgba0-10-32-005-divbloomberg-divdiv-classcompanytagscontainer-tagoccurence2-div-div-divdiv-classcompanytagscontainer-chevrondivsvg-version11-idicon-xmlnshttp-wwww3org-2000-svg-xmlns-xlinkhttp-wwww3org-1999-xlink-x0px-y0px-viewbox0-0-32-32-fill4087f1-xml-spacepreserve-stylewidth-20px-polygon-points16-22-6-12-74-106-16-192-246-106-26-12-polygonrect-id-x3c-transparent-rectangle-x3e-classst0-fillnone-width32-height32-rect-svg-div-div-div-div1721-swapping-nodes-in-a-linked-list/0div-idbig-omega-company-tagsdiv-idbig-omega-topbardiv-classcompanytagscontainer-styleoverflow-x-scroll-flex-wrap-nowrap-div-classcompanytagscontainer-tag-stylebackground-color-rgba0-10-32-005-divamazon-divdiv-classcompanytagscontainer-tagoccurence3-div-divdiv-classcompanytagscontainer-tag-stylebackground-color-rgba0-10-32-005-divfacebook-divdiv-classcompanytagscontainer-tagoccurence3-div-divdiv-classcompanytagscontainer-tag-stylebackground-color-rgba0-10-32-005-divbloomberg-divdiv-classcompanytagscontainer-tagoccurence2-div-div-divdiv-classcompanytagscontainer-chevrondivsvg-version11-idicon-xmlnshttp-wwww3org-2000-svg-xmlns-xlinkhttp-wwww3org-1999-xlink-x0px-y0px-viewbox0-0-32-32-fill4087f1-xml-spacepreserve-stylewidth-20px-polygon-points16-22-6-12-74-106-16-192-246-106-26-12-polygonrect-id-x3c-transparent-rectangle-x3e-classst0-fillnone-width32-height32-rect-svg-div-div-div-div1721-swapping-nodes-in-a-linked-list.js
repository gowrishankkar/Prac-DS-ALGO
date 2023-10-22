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
// var swapNodes = function(head, k) {
//     let len = 0
//     let curr = head
//     while (curr){
//         len++
//         curr = curr.next
//     }
//     if (k > len / 2) k = len - k + 1
//     let l = 1
//     let left = head
//     while (l < k){
//         l++
//         left = left.next
//     }
//     let r = k
//     let right = left
//     while (r < len - k + 1){
//         r++
//         right = right.next
//     }
//     [left.val, right.val] = [right.val, left.val]
//     return head
// };

// var swapNodes = function(head, k) {
//     let [left, right, curr] = [null, head, head];
//     for(let i = 1; i<= k - 1; i++){
//         curr = curr.next
//     }
//     left = curr;
//     while(curr.next){
//         curr = curr.next
//         right = right.next
//     }
//     [left.val, right.val] = [right.val, left.val]
//     return head;
// };


var swapNodes = function(head, k) {

    let fast = new ListNode(0, head)
    let slow = fast

    while (k > 0) {
        fast = fast.next
        k--
    }
    // Fast node is at Kth node from the start
    let leftNode = fast

    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    // Now slow is at Kth node from the end

    let temp = slow.val
    slow.val = leftNode.val
    leftNode.val = temp

    return head
};