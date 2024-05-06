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
var removeNodes = function(head) {
    let stack = []
    let p = head
    while (p) {
        while (stack.length > 0 && p.val > stack.at(-1))
            stack.pop()
        stack.push(p.val)
        p = p.next
    }
    p = head
    let n = stack.length
    for (let i = 0; i < n; i++) {
        p.val = stack[i]
        if (i == n - 1)
            p.next = null
        else
            p = p.next
    }
    return head
};