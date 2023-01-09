/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const graph = new Array((1000 + 1)).fill().map(() => []);

    for (const [ src, dst ] of edges) {
        const hasNodes = (src in graph) && (dst in graph)
        if (hasNodes && hasRedundantConnection(graph, src, dst)) return [ src, dst ];

        graph[src].push(dst);
        graph[dst].push(src);
    }
}

const hasRedundantConnection = (graph, source, target, seen = new Set()) => {
    if (seen.has(source)) return false
    seen.add(source);

    const isEqual = source === target
    if (isEqual) return true;

    return dfs(graph, source, target, seen);
}

const dfs = (graph, source, target, seen) => {
    for (const neighbor of graph[source]) {
        if (hasRedundantConnection(graph, neighbor, target, seen)) return true;
    }

    return false;
}