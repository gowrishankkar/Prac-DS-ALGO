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
//     if (root === null) {
//     return 0;
//   }

//   let ans = 0;
//   const q = []; // {node, index}
//   q.push([root, 1]);

//   while (q.length > 0) {
//     const offset = q[0][1] * 2;
//      let last = q[q.length - 1][1];
//      let first = q[0][1]
//     ans = Math.max(ans, last - first + 1);
//     const sz = q.length;
//     for (let i = 0; i < sz; i++) {
//       const node = q[0][0];
//       const index = q.shift()[1];
//       if (node.left !== null) {
//         q.push([node.left, index * 2 - offset]);
//       }
//       if (node.right !== null) {
//         q.push([node.right, index * 2 + 1 - offset]);
//       }
//     }
//   }

//   return ans;
// };




// var widthOfBinaryTree = function(root) {
//     if (root === null) {
//     return 0;
//   }

//   let ans = 0;
//   const q = []; // {node, index}
//   q.push([root, 1]);

//   while (q.length > 0) {
//     const offset = q[0][1] * 2;
//      let last = q[q.length - 1][1];
//      let first = q[0][1]
//     ans = Math.max(ans, last - first + 1);
//     const sz = q.length;
//     for (let i = 0; i < sz; i++) {
//       const node = q[0][0];
//       const index = q.shift()[1];
//       if (node.left !== null) {
//         q.push([node.left, index * 2 - offset]);
//       }
//       if (node.right !== null) {
//         q.push([node.right, index * 2 + 1 - offset]);
//       }
//     }
//   }

//   return ans;
// };






var widthOfBinaryTree = root => {
    if (!root) return 0;

	let max = 0;
	const queue = [[root, 0]]; // [currNode, level index]

	while (queue.length) {
		const len = queue.length;
		let left = queue[0][1]; // 1st idx
		let right = queue[len - 1][1]; // last idx

		for (let i = 0; i < len; i++) {
			const [node, idx] = queue.shift();
			const subIdx = idx - left; // normalize index to handle Big numbers

			if (node.left) queue.push([node.left, subIdx * 2 + 1]); // find next left idx & node
			if (node.right) queue.push([node.right, subIdx * 2 + 2]); // find next right idx & node
		}

		const width = right - left + 1; // add 1, 0-index based
		max = Math.max(max, width);
	}

	return max;
};