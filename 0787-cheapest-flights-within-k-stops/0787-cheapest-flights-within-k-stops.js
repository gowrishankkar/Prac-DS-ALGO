/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, f, src, dst, k) {
    
    let adj = new Array(n).fill(null).map(() => []);
    for(let i = 0; i<f.length ; i++){
        let [node, adjN, dis] = f[i];
        adj[node].push([adjN, dis]);
    }
    let q = [];
   
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
     q.push([0, src, 0]);
    while(q.length){
        let [stops, node, cost] = q.shift();
        if(stops > k) continue;
        for(let [an, e] of adj[node]){
            let totalCost = cost + e;
            if(totalCost <= dist[an] && stops <= k){
                dist[an] = totalCost;
                q.push([stops + 1, an, totalCost])
            }
        }
    }
    return dist[dst] === Infinity ? -1 : dist[dst]
};


