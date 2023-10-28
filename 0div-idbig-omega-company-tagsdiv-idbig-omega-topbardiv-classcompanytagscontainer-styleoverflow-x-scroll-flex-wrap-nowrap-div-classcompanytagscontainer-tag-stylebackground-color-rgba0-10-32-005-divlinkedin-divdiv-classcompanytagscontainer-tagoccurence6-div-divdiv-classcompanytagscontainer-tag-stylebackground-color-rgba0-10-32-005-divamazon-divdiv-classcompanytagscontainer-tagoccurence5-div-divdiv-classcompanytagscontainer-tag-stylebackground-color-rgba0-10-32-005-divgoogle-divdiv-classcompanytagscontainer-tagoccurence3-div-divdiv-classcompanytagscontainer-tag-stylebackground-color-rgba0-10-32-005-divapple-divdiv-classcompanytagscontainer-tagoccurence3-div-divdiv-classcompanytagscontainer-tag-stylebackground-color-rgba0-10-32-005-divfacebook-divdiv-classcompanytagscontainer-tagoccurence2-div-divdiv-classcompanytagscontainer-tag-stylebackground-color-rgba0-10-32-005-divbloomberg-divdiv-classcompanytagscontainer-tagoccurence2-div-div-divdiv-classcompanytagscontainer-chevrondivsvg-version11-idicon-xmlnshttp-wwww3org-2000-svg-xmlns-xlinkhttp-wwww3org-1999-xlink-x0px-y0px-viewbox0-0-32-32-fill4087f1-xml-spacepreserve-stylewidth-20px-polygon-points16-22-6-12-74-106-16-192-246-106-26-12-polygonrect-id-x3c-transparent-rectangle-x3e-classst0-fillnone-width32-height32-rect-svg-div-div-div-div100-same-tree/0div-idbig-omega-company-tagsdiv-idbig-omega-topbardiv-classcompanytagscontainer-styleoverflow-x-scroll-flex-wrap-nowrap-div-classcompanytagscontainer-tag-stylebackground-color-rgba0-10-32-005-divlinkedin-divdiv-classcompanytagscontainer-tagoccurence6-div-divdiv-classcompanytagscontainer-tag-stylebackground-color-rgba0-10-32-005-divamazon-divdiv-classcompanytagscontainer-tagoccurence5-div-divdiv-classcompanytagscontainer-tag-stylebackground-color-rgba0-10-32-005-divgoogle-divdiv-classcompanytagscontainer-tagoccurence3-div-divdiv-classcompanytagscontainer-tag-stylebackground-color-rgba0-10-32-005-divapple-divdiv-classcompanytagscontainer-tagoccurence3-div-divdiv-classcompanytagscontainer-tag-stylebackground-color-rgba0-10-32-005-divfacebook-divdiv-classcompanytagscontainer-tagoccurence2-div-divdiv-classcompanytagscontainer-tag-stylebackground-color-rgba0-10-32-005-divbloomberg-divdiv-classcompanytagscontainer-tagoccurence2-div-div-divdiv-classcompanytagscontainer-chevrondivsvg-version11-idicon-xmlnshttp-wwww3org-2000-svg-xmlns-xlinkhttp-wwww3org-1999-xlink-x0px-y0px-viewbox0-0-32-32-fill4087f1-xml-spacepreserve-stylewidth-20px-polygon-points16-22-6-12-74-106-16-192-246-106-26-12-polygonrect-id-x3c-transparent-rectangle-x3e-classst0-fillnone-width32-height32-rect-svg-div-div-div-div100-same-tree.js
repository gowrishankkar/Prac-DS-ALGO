/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     if (isSameNode(p, q)) return true;

//     return bfs([[ p, q ]]);
// }

// const bfs = (queue) => {
//     while (queue.length) {
//         for (let i = (queue.length - 1); 0 <= i; i--) {
//             const [ p, q ] = queue.shift();

//             if (!isSame(p, q)) return false;

//             if (p.left) queue.push([ p.left, q.left ]);
//             if (p.right) queue.push([ p.right, q.right ]);
//         }
//     }

//     return true;
// }

// const isSameNode = (p, q) => {
//     const isBaseCase = !(p || q);
//     if (isBaseCase) return true;

//     const isBalanced = (p && q);
//     if (!isBalanced) return false;

//     const isSame = p.val === q.val;
//     if (!isSame) return false;

//     return true;
// }

// const isSame = (p, q) => isSameNode(p, q)
//     && isSameNode(p.left, q.left)
//     && isSameNode(p.right, q.right);



var isSameTree = function(p, q) {
    if (p  == null || q == null) return p == q;

    return (p.val == q.val) && isSameTree(p.left , q.left) &&  isSameTree(p.right , q.right)
}

