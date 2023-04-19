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


function getLeftNode(root) {

    if(!root) return []

    if(!root.left && !root.right) {
        return [];
    }   

    let result;

    if(root.left) {
        result = getLeftNode(root.left);
    }
    else {
        result = getLeftNode(root.right);
    }

    return [root.val, ...result];
}


function getRightNode(root) {

    if(!root) return []

    if(!root.left && !root.right) {
        return [];
    }   

    let result;

    if(root.right) {
        result = getRightNode(root.right);
    }
    else {
        result = getRightNode(root.left);
    }

    return [...result, root.val];
}


function inorder(root, result = []) {
    if(!root) return result;

    inorder(root.left, result);

    if(!root.left && !root.right) {
        result.push(root.val);
    }
    inorder(root.right, result);

    return result;
}


function BFS(root) {
    if(!root) return [];
    
    let left = getLeftNode(root.left);
    let right = getRightNode(root.right);
    let leafs = inorder(root);

    // console.log("leafs", leafs)
    // console.log(left, right)

    return [root.val, ...left, ...leafs, ...right]
}


console.log(BFS(a));
