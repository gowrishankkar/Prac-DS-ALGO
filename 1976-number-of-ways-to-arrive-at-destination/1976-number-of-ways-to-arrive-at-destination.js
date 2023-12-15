/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// var countPaths = function(n, roads) {

//     let adj = new Array(n).fill(null).map(() => []);
//     for(let [u, v, w] of roads){
//         adj[u].push([v, w]);
//         adj[v].push([u, w]);
//     }
//     const heap = new MinPriorityQueue({
//         priority: x => x[0]
//     });
//     let dist = new Array(n).fill(Infinity);
//     let ways = new Array(n).fill(0);
//     dist[0] = 0;
//     ways[0] = 0;

//     heap.enqueue([0, 0]);
//     while(heap.size()) {
//         const [dis, node] = heap.dequeue().element;
//          for(let [e, an] of roads){
//              const c = dis + e;
//              if(c < dist[an]){
//                  dis[an] = c;
//                  heap.enqueue([c, an]);
//                  ways[an] = ways[node]
//              }else if( c === dist[node]){
//                  ways[an] = (ways[an] + ways[node] ) % 1000000007;
//              }
//          }
//     }
    
//     return ways[n - 1];
// };



var countPaths = function(n, roads) {
    const g = Array.from({ length: n}, () => []);
    for(let [a, b, c] of roads) {
        g[a].push([b, c]);
        g[b].push([a, c]);
    }
    
    // dijkstras to find shortest path from source 0 to destination
    const dis = new Array(n).fill(Infinity);
    const ways = new Array(n).fill(0);
    ways[n-1] = 1;
    dis[n-1] = 0;
    const dijkstras = () => {
        const heap = new MinPriorityQueue({ priority: x => x[1] });
        heap.enqueue([n-1, 0]);
        while(heap.size()) {
            const [n, cost] = heap.dequeue().element;
            for(let [nextNode, w] of g[n]) {
                const total = cost + w;
                if(dis[nextNode] == total) {
                    // already have found a path which set me to this value;
                    ways[nextNode] = (ways[nextNode] + ways[n]) % 1000000007;
                }
                else if(dis[nextNode] > total) {
                    dis[nextNode] = total;
                    ways[nextNode] = ways[n];
                    heap.enqueue([nextNode, total]);
                }
            }
        }
    }
    dijkstras();
    
    return ways[0];
};


