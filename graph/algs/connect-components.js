let edgeList = [
    [1, 2],
    [5, 6],
    [4, 6],
    [8, 6],
    [7, 6],
    [3, 3]
];

function createGraph(edges) {
    let graph = {};

    for(let edge of edges) {
        let [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const connectComponent = () => {
    const graph = createGraph(edgeList);
    let visited = new Set();
    let count = 0;
    
    for(let source in graph) {
        if(!visited.has(Number(source))) {
            let queue = [source];
            count++;
            visited.add(Number(source));

            while(queue.length) {
                let current = queue.shift();
                for(let item of graph[current]) {
                    if(!visited.has(item)) {
                        queue.push(item);
                        visited.add(item);
                    }
                }
            }
        }
    }

    console.log(count)
}


connectComponent();