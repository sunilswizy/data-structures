const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];


function shortestPath(edges, source, des) {

    let visited = new Set();

    let graph = createGraph(edges);

    let queue = [{
        node: source, dis: 0
    }];

    while(queue.length) {
        let { node, dis } = queue.shift();

        if(visited.has(node)) continue;
        
        if(node === des) {
            return dis;
        }

        visited.add(node);

        for(let edge of graph[node]) {
            queue.push({
                node: edge, dis: dis + 1
            });
        }
    }

    return -1;
}


console.log(shortestPath(edges, 'w', 'z'))


function createGraph(edges) {
    const graph = {};

    for(let edge of edges) {
        let [src, des] = edge;

        if(!(src in graph)) graph[src] = [];
        if(!(des in graph)) graph[des] = [];

        graph[src].push(des);
        graph[des].push(src);
    }

    return graph;
}