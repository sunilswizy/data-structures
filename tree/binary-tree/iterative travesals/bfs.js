class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


function BFS(root) {
    if(!root) return [];
    console.log(root)
    let queue = [ root ];
    let res = [];

    while(queue.length) {
        let currentNode = queue.shift();
        res.push(currentNode.value)
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
    }

    return res;
}

console.log(BFS(a));

