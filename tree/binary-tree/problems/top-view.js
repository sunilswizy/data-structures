class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node(7);
const b = new Node(7);
const c = new Node(9);
const d = new Node(2);
const e = new Node(6);
const f = new Node(9);
const g = new Node(5);
const h = new Node(11);
const i = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;


function BFS(root) {
    
    let queue = [ {
        currentNode: root,
        col: 0,
        row: 0
    }];

    let map = new Map();

    while(queue.length) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {

            let { currentNode, col, row } = queue.shift();

            if(!map.has(col)) {
                map.set(col, currentNode.val);
            }


            if(currentNode.left) {
                queue.push({
                    currentNode: currentNode.left,
                    col: col - 1,
                    row: row + 1
                })
            }

            if(currentNode.right) {
                queue.push({
                    currentNode: currentNode.right,
                    col: col + 1,
                    row: row + 1
                })
            }

        }
    }

    let keys = Array.from(map.keys()).sort((a, b) => a - b);

    let topView = [];

    for(let key of keys) {
        topView.push(map.get(key));
    }

    console.log(map);

    return topView
}


console.log(BFS(a));