
let adjacency_list = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}


function largestComponet(graph) {

    let set = new Set();
    let max = 0;

    for(let source in graph) {
        if(!set.has(Number(source))) {
            max = Math.max(dfs(graph, source, set), max);
        }
    }

    return max;
}

function dfs(graph, source, set) {

    if(set.has(source)) return 0;
    set.add(source);

    let count = 0;
    for(let edge of graph[source]) {
        if(!set.has(edge)) {
            count+= dfs(graph, edge, set) + 1;
        }
    }

    return count;
}
 
console.log(largestComponet(adjacency_list));