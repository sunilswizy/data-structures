
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function DFS(graph, source) {

    let stack = [ source ]; 


    while(stack.length) {
        
        let currentStack = stack.pop();
        console.log(currentStack);

        for(let item of graph[currentStack]) {
            console.log("items", item)
            stack.push(item);
        }
    }
    return null;

}

function DFSRecursive(graph, stack = []) {

    if(!stack.length) {
        return null;
    } 

    let currentNode = stack.pop();

    console.log(currentNode);
    for(let item of graph[currentNode]) {
        stack.push(item);
    }

    DFSRecursive(graph, stack);
}

function DFSSimple(graph, source) {

    console.log(source);
    for(let item of graph[source]) {
        DFSSimple(graph, item);
    }

    return null
}

console.log(DFSRecursive(graph, ['a']));
console.log(DFS(graph,'a'));
console.log(DFSSimple(graph,'a'));

