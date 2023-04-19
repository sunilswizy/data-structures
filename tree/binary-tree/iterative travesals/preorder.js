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


function DFS(root) {
    if(!root) return [];    
    return [...DFS(root.left), ...DFS(root.right), root.value]
}

function Inorder(root) {
    if(!root) return [];

    let stack = [];
    let res = [];
    let currentNode = root;

    while(stack.length || currentNode) {
        while(currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        res.push(currentNode.value);
        currentNode = currentNode.right
    }

    return res;
}


function PreOrder(root) {
    if(!root) return [];
    let stack = [ root ];
    let res = [];

    while(stack.length) {
        let currentNode = stack.pop();
        res.push(currentNode.value)
        if(currentNode.right) stack.push(currentNode.right);
        if(currentNode.left) stack.push(currentNode.left);
    }

    return res;
}


function postOrder(root) {
    if(!root) return [];
    let stack = [ root ];
    let res = [];

    while(stack.length) {
        let currentNode = stack.pop();
        res.unshift(currentNode.value)
        if(currentNode.left) stack.push(currentNode.left);
        if(currentNode.right) stack.push(currentNode.right);
    }

    return res;
}

console.log(DFS(a));
console.log(postOrder(a))

