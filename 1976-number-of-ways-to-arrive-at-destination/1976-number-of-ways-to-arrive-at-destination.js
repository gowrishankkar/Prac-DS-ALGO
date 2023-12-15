/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {

    let adj = Array.from({ length: n}, () => []);
     for(let [a, b, c] of roads) {
        adj[a].push([b, c]);
        adj[b].push([a, c]);
    }
    
    const heap = new MinPriorityQueue({
        priority: x => x[0]
    });
    let dist = new Array(n).fill(Infinity);
    let ways = new Array(n).fill(0);
    dist[0] = 0;
    ways[0] = 1;

    heap.enqueue([0, 0]);
    while(heap.size()) {
        const [cost, node] = heap.dequeue().element;
         for(let [an, e] of adj[node]){
             const total = cost + e;
             if(total < dist[an]){
                 dist[an] = total;
                 heap.enqueue([total, an]);
                 ways[an] = ways[node]
             } else if( total === dist[an]){
                 ways[an] = (ways[an] + ways[node] ) % 1000000007;
             }
         }
    }
    
    return ways[n-1] ;
};



// var countPaths = function(n, roads) {
//     const g = Array.from({ length: n}, () => []);
//     for(let [a, b, c] of roads) {
//         g[a].push([b, c]);
//         g[b].push([a, c]);
//     }
    
//     // dijkstras to find shortest path from source 0 to destination
//     const dis = new Array(n).fill(Infinity);
//     const ways = new Array(n).fill(0);
//     ways[n-1] = 1;
//     dis[n-1] = 0;
//     const dijkstras = () => {
//         const heap = new MinPriorityQueue({ priority: x => x[1] });
//         heap.enqueue([n-1, 0]);
//         while(heap.size()) {
//             const [n, cost] = heap.dequeue().element;
//             for(let [nextNode, w] of g[n]) {
//                 const total = cost + w;
//                 if(dis[nextNode] == total) {
//                     // already have found a path which set me to this value;
//                     ways[nextNode] = (ways[nextNode] + ways[n]) % 1000000007;
//                 }
//                 else if(dis[nextNode] > total) {
//                     dis[nextNode] = total;
//                     ways[nextNode] = ways[n];
//                     heap.enqueue([nextNode, total]);
//                 }
//             }
//         }
//     }
//     dijkstras();
    
//     return ways[0];
// };


