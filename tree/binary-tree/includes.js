
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// bfs

// function checkElement(root, target) {
    
//     let queue = [ root ];

//     while(queue.length) {

//         let currentNode = queue.shift();

//         if(currentNode.value === target) return true;
        
//         if(currentNode.left) queue.push(currentNode.left);
//         if(currentNode.right) queue.push(currentNode.right);

//     }

//     return false;
// }

// dfs

function checkElement(root, target) {
    
    if(!root) return false;
    if(root.value === target) return true;
    
    return checkElement(root.left, target) || checkElement(root.right, target);;
}


console.log(checkElement(a, 'e'))