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
        adj[f[i][0]].push([f[i][1], f[i][2]])
    }
    let q= [];
      const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    q.push([0, src, 0])
    while(q.length){
        let [stop, n, cost] = q.shift();
        if(stop > k) continue;
        
        for(let i of adj[n]){
            let [adjNode, price] = i;
            if(cost +price <dist[adjNode] && stop <=k){
                dist[adjNode] = cost + price;
                q.push([stop +1 , adjNode, cost + price])
            }
        }
    }
    
    return dist[dst] === Infinity ? -1 : dist[dst]
    
    
    
};