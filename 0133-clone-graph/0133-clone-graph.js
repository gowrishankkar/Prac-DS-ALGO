/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, seen = new Map()) {
    const isBaseCase = node === null;
    if (isBaseCase) return null;

    if (seen.has(node)) return seen.get(node);

    return dfs(node, seen);                              /* Time O(V + E) | Space O(N) */
}

const dfs = (node, seen) => {
    const clone = new Node(node.val);

    seen.set(node, clone);                               /*               | Space O(N) */

    for (const neighbor of node.neighbors) {
        const cloneNeighbor = cloneGraph(neighbor, seen);/* Time O(V + E) | Space O(H) */

        clone.neighbors.push(cloneNeighbor);             /*               | Space O(V + E) */
    }

    return clone;
}
