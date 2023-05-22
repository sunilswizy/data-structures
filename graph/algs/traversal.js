
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function dfs(root, start, results) {
    
    results.push(start)
    for(let item of root[start]) {
        for(let edge of item) {
            dfs(root, edge, results)
        }
    }

    return results;
}

function bfs(root, start) {
    let res = [];

    let queue = [start];

    while(queue.length) {
        let current = queue.shift();
        res.push(current);
        for(let edge of root[current]) {
            queue.push(edge);
        }
    }

    return res;
}

console.log(dfs(graph, 'a', []));
console.log(bfs(graph, 'a'))





