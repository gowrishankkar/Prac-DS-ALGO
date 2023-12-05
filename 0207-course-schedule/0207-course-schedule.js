/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj = new Array(numCourses).fill([]),
    q = [],
    topo = [],
    inDegree = new Array(numCourses).fill(0);

    for(const [e, v] of prerequisites){
       adj[e].push(v);
       inDegree[e]++
        
    }

    for(let i = 0; i< numCourses ; i++){
        if(inDegree[i] == 0) q.push(i)
    }

    while(q.length){
        let node = q.shift();
        topo.push(node)
        for(let it in adj[node]){
            inDegree[it]--;
            if(inDegree[it] == 0) q.push(it)
        }
    }
    return topo.length === numCourses ;
    
};


var canFinish = function(numCourses, prerequisites) {
    let coursesOrder = [],
        graph = new Map(),
        inDegree = Array(numCourses).fill(0),
        queue = []

    for(let [e, v] of prerequisites)   {
        if(!graph.has(v)) {
            graph.set(v, [])
        }

        graph.get(v).push(e)
        inDegree[e]++
    } 

    for(let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    while(queue.length > 0) {
        let v = queue.shift()

        if (graph.has(v)) {
            for(let e of graph.get(v)) {
                inDegree[e]--
                if(inDegree[e] === 0) {
                    queue.push(e)
                }
            }
        }

        coursesOrder.push(v)
    }

    return numCourses === coursesOrder.length
};
