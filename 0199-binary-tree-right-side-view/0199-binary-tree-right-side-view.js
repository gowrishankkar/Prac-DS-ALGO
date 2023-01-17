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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return [];

    return bfs([ root ]);
};

const bfs = (queue, rightSide = []) => {
    while (queue.length) {
        let prev = null;

        for (let i = (queue.length - 1); 0 <= i; i--) {
            const node = queue.shift();

            prev = node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        rightSide.push(prev.val);
    }

    return rightSide;
}
