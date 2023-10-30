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
// var widthOfBinaryTree = function(root) {
//     if(!root) return 0;
//     let ans = 0;
//     let s = [];
//     s.push([root, 0])
//     while(s.length){
//         let first = 0, last = 0;
//         let minVal = s[0][1];
//         console.log('minVal', minVal)
//         const size = s.length;
//         for(let i = 0; i < size; i++){
//             let [node, val] = s.shift();
//             let curri = val - minVal;
//             if(i == 0) first = curri;
//             if(i == size - 1) last = curri;
//             if(node.left) s.push([node.left, curri * 2 + 1])
//             if(node.right) s.push([node.right, curri * 2 + 2])
//         }
//         ans = Math.max(ans, last - first + 1)
//     }
//     return ans;
// };


// var widthOfBinaryTree = function(root) {
//     if(!root) return 0;
//     let queue = [[root, 0n]];
//     let max = 0n;
//     while(queue.length){
//         const n = queue.length;
//         let left = queue[0][1], right = 0, tmp = [];

//         for(let i = 0; i < n; i++){
//             const [node, pos] = queue[i];
            
//             if(node.left){
//                 right = pos * 2n;
//                 tmp.push([node.left, right]);
//             }
//             if(node.right){
//                 right = pos * 2n + 1n;
//                 tmp.push([node.right, right]);
//             }
//             right = pos;
//         }

//         queue = tmp;
//         max = max > right - left + 1n? max: right - left + 1n;
//     }
//     return max;
// };


var widthOfBinaryTree = function(root) {
    if (root === null) {
    return 0;
  }

  let ans = 0;
  const q = []; // {node, index}
  q.push([root, 1]);

  while (q.length > 0) {
    const offset = q[0][1] * 2;
    ans = Math.max(ans, q[q.length - 1][1] - q[0][1] + 1);
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const node = q[0][0];
      const index = q.shift()[1];
      if (node.left !== null) {
        q.push([node.left, index * 2 - offset]);
      }
      if (node.right !== null) {
        q.push([node.right, index * 2 + 1 - offset]);
      }
    }
  }

  return ans;
};