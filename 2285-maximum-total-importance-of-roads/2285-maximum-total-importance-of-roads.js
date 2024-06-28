var maximumImportance = function (n, roads) {
    // Lets calculate the indegrees of each node
    // Use Array.fill() to create an array of length n filled with 0's
    return roads
        // For each road[a, b] increment the indegree of nodes a and b
        .reduce((indegree, [a, b]) => (indegree[a]++, indegree[b]++, indegree), Array(n).fill(0))
        // Sort the indegrees in descending order
        .sort((b, a) => b - a)
        // Finally calculate the max importance by summing the product of indegree & its index
        .reduce((importance, indegree, idx) => importance + indegree * (idx + 1), 0);
};