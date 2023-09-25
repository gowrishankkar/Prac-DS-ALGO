/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function(root) {
//     if (root == null) return null;
//     const queue = [root];
//     while (queue.length > 0) {
//         let size = queue.length;
//         while (size > 0){
//             let top = queue.shift();
//             if (size > 1){
//                 top.next = queue[0];
//             }
            
//             if (top.left != null) queue.push(top.left);
//             if (top.right != null) queue.push(top.right);
//             size -= 1
//         }
//     }
//     return root
// };


var connect = function(root) {
    if (root == null) return root;
    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};