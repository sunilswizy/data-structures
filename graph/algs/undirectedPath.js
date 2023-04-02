

function undirectedPath(edges, nodeA, nodeB) {
    let graph = buildGrapthWithedges(edges);
    return hasPath(graph, nodeA, nodeB)
}


function hasPath(graph, src, des, visited = new Set()) {

    if(src === des) return true; 
    if(visited.has(src)) return false;
    visited.add(src);

        for(let item of graph[src]) {
            if(hasPath(graph, item, des, visited)) {
                return true;
            }
        }

    return false;
}

function buildGrapthWithedges(edges) {
    let graph = {};

    for(let edge of edges) {
        let [a, b] = edge;

        if(!(a in graph))  graph[a] = [];
        if(!(b in graph))  graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    
    console.log(graph)
    
    return graph;
}


let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'i'));
