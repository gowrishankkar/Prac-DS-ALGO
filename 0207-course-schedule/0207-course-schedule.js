
/**
 * https://leetcode.com/problems/course-schedule/
 * Time O(V + E) | Space O(V + E)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const { graph, visited, path }  = buildGraph(numCourses, prerequisites);

    for (let currCourse = 0; currCourse < numCourses; currCourse++) {
        if (isCyclic(currCourse, graph, visited, path)) return false;
    }

    return true;
}

var initGraph = (numCourses) => ({
    graph: new Array(numCourses).fill().map(() => []),
    visited: new Array(numCourses).fill(false),
    path: new Array(numCourses).fill(false)
})

var buildGraph = (numCourses, prerequisites) => {
    const { graph, visited, path } = initGraph(numCourses);

    for (const [ src, dst ] of prerequisites) {
        const neighbors = (graph[dst] || []);

        neighbors.push(src);

        graph[dst] = neighbors;
    }

    return { graph, visited, path };
}

var isCyclic = (currCourse, graph, visited, path) => {
    const isVisited = visited[currCourse]
    if (isVisited) return false;

    const hasSeen = path[currCourse]
    if (hasSeen) return true;

    const isMissingNext = !(currCourse in graph)
    if (isMissingNext) return false;

    const _isCyclic = backTrack(currCourse, graph, visited, path);

    visited[currCourse] = true;

    return _isCyclic
}

var backTrack = (currCourse, graph, visited, path) => {
    path[currCourse] = true;
        const _hasCycle = hasCycle(currCourse, graph, visited, path)
    path[currCourse] = false;

    return _hasCycle
}

var hasCycle = (currCourse, graph, visited, path) => {
    for (const neighbor of graph[currCourse]) {
        if (isCyclic(neighbor, graph, visited, path)) return true;
    }

    return false
}
