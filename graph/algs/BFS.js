
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}


function BFS(graph, source) {
    let queue = [ source ];


    while(queue.length) {
        let currentNode = queue.pop();

        console.log(currentNode);

        for(let item of graph[currentNode]) {
            queue.push(item);
        }
    }
}

BFS(graph, 'a')

