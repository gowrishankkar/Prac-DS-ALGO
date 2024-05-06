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
    //return head
    const stack = [head.next];
    const dummy = new ListNode(null, head);
    const prev = [head];

    while (stack.length) {
        const node = stack.pop();
        const pNode = prev.at(-1);

        if (!node) continue;
        if (node.val > pNode.val) {
            while (prev.at(-1)) {
                prev.at(-1).next = null;
                prev.pop();
                if (prev.length && prev.at(-1).val >= node.val ) {
                    prev.at(-1).next = node;
                    break;
                }
            }
        } else {
            prev.at(-1).next = node;
        }
        prev.push(node);
        stack.push(node.next);
    }

    return prev[0];
};