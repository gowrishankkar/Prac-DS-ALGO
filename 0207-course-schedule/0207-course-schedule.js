/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let q = [];
    let topo = [];
    let inDegree = new Array(numCourses).fill(0);
    let map = {}
    
    for(const [e, v] of prerequisites){
        if(!map[v]) map[v] = []
        map[v].push(e)
        inDegree[e]++
    }

    for(let i = 0; i< numCourses ; i++){
        if(inDegree[i] == 0) q.push(i)
    }

    while(q.length){
        let node = q.shift();
        topo.push(node)
        if(map[node]){
            for(let e of map[node]){
                inDegree[e]--;
                if(inDegree[e] == 0) q.push(e)
            }  
        }
        
    }
    return topo.length === numCourses ;
    
};

