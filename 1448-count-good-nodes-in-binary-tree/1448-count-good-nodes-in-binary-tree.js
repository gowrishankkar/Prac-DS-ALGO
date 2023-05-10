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
 * @return {number}
 */
var goodNodes = function(root, ) {
    const isBaseCase = root === null;
    if (isBaseCase) return 0
    
    return bfs([[ root, -Infinity ]]);
}

const bfs = (queue, total = 0) => {
    while (queue.length) {
        for (let i = (queue.length - 1); 0 <= i; i--) {
            let [ root, max ] = queue.shift();

            const isGood = max <= root.val;
            if (isGood) total++;

            max = Math.max(max, root.val);

            if (root.right) queue.push([ root.right, max ]);
            if (root.left) queue.push([ root.left, max ]);
        }
    }

    return total;
}