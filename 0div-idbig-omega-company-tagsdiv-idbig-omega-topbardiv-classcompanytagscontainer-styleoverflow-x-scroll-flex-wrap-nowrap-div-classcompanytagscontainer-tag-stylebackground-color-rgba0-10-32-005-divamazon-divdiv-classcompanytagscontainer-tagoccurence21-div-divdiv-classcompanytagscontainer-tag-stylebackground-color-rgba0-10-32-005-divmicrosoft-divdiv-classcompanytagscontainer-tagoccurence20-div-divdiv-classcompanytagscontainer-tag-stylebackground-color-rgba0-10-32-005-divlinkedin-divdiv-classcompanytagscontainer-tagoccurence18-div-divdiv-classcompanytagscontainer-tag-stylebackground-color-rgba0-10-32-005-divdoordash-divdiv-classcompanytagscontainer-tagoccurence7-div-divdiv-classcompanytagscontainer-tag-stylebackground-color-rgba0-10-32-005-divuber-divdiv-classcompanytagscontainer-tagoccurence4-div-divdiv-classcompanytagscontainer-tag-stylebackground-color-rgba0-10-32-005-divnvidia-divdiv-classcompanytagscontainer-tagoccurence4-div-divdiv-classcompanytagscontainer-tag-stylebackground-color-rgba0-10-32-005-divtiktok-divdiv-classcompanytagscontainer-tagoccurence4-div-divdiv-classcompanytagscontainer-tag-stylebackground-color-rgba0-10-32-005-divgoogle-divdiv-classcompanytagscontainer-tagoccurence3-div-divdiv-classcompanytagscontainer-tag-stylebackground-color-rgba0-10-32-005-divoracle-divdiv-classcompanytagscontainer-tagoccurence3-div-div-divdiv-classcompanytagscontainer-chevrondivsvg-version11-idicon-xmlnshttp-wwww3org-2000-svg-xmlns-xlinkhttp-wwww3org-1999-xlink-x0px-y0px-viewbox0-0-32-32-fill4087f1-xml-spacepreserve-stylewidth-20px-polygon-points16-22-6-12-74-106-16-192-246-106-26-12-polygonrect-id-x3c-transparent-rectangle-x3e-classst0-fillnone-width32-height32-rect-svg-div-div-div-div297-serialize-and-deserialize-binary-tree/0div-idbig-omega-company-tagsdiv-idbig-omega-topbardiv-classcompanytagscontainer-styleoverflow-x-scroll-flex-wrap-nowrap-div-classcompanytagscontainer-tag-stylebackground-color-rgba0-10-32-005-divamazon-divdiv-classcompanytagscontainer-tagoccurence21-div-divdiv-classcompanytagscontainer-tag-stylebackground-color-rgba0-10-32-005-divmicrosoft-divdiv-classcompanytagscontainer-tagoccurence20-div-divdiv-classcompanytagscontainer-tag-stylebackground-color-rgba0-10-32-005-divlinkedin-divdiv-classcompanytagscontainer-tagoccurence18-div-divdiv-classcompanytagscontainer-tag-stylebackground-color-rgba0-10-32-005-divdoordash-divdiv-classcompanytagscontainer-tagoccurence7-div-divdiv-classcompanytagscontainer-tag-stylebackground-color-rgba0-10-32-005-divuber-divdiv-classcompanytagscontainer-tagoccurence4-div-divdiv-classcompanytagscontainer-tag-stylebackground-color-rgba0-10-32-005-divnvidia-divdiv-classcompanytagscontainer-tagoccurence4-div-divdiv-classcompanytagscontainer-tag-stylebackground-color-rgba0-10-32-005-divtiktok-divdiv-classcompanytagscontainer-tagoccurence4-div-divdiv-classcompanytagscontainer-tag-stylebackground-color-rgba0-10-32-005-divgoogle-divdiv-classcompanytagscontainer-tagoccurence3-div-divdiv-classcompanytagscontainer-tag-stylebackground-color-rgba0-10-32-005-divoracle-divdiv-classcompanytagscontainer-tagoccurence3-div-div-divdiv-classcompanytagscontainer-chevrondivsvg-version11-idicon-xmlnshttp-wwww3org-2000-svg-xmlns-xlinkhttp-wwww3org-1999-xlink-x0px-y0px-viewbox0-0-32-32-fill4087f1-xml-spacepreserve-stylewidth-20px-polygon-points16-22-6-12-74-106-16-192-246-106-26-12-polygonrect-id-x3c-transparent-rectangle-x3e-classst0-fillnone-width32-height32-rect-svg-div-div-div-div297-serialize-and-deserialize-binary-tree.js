/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function(root) {
//     let queue = [], res = [];
//     queue.push(root);
//     while (queue.length > 0) {
//         let node = queue.shift();
//         node ? res.push(node.val) : res.push("null");
//         if (node) queue.push(node.left);
//         if (node) queue.push(node.right);
//     }
//     let i = res.length-1;
//     console.log('res', res, res.join("$"))
//     while (res[i] === "null") i--;
//     return res.slice(0,i+1).join("#");
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function(data) {
//       if (data === "") {
//         return null;
//     }
//     let arr = data.split("#"), i = 1;
//     let queue = [];
//     let root = new TreeNode(Number(arr[0]));
//     console.log('arr', arr)
//     queue.push(root);
//     while (queue.length > 0) {
//         let left = (i >= arr.length || arr[i] === "null") ? null : new TreeNode(Number(arr[i]));
//         let right = (i+1 >= arr.length || arr[i+1] === "null") ? null : new TreeNode(Number(arr[i+1]));
//         i += 2;
//         let root = queue.shift();
//         root.left = left;
//         root.right = right;
//         if (left !== null) queue.push(left);
//         if (right !== null) queue.push(right);
//     }
//     return root;
// };



var serialize = function(root) {
  if (!root) {
    return 'n';
  }

  return `${root.val} ${serialize(root.left)} ${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const treeNodes = data.split(' ');
  let i = 0;

  function restoreTree() {
    if (treeNodes[i] === 'n' || i >= treeNodes.length) {
      i++;
      return null;
    }

    const node = new TreeNode(treeNodes[i]);
    i++;
    node.left = restoreTree();
    node.right = restoreTree();
    return node;
  }

  return restoreTree();
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */