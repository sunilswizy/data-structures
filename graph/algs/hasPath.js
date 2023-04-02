


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// DFS

function hasPath(graph, src, des) {

    console.log(src);

    if(src === des) {
        console.log(true)
        return true;
    }

    for(let path of graph[src]) {
        if(hasPath(graph, path, des)) {
            return true;
        }
    }

    return false;
}

//complexity

// e - no of edges
// n - no of nodes

// time - o(e)  or o(n^2)
// space - o(n)
 
// console.log(hasPath(graph, 'a', 'f'));


function hasPathBFS(graph, src, des) {
    let queue = [ src ];

    while(queue.length) {
        let currentNode = queue.shift();

        if(currentNode === des) {
            return true;
        }

        for(let path of graph[currentNode]) {
           queue.push(path);
        }
    }

    return false;
}

console.log(hasPathBFS(graph, 'a', 'f'));

