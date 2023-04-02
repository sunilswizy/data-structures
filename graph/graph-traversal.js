const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// 'PHX' => [ 'LAX', 'JFK' ],
// 'BKK' => [ 'MEX', 'LIM' ],
// 'OKC' => [ 'JFK' ],
// 'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
// 'LAX' => [ 'PHX', 'MEX' ],
// 'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
// 'EZE' => [ 'MEX' ],
// 'HEL' => [ 'JFK' ],
// 'LOS' => [ 'JFK' ],
// 'LAP' => [],
// 'LIM' => [ 'MEX', 'BKK' ]

// the graph

let adjacentList = new Map();

// add node
function addNode(airport) {
    adjacentList.set(airport, []);
}

//add edge

function addEdge(origin, destination) {
    adjacentList.get(origin).push(destination);
    adjacentList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach((port) => addEdge(...port));

console.log(adjacentList);
let visited = new Set();

// console.log(breadthSearch(['PHX'], visited))

// breadth search -- recursion

function breadthSearch(queue, visited) {
    if(!queue.length) {
        return;
    }

    let currentNode = queue.shift();
    const getNode = adjacentList.get(currentNode);

    for(let item of getNode) {
        if(item === 'BKK') {
            console.log("Found it...");
        }

        if(!visited.has(item)) {
            visited.add(item);
            queue.push(item);
        }
    }

    breadthSearch(queue, visited);
}


function DFS(start, visited = new Set()) {
    console.log(start)
    visited.add(start);

    let getNodes = adjacentList.get(start);

    for(let item of getNodes) {
        if(item === 'BKK') {
            console.log('Match found');
            return;
        }

        if(!visited.has(item)) {
            DFS(item, visited);
        }
    }
}

DFS('BKK');


// iterative
function bfs(start) {

    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {

        const airport = queue.shift(); // mutates the queue

        const destinations = adjacencyList.get(airport);


        for (const destination of destinations) {

            if (destination === 'BKK')  {
                console.log(`BFS found Bangkok!`)
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
           
        }
    }
}
