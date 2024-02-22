/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let x = null, y = null, pred = null, predecessor = null;

    while (root !== null) {
        if (root.left !== null) {
            // Find the rightmost node in the left subtree or the predecessor.
            predecessor = root.left;
            while (predecessor.right !== null && predecessor.right !== root) {
                predecessor = predecessor.right;
            }
            
            // Make root the right child of its predecessor.
            if (predecessor.right === null) {
                predecessor.right = root;
                root = root.left;
            } else {
                // Revert the changes made in the 'if' part to restore the original tree.
                // i.e., fix the right child of predecessor.
                if (pred !== null && root.val < pred.val) {
                    y = root;
                    if (x === null) x = pred;
                }
                pred = root;

                predecessor.right = null;
                root = root.right;
            }
        } else {
            if (pred !== null && root.val < pred.val) {
                y = root;
                if (x === null) x = pred;
            }
            pred = root;
            root = root.right;
        }
    }
    
    // Swap the values of the two nodes
    if (x !== null && y !== null) {
        let temp = x.val;
        x.val = y.val;
        y.val = temp;
    }
};