
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// BFS
// function totalSum(root) {
//     if(!root) return 0;
//     console.log(root)
//     let queue = [ root ];
//     let sum = 0

//     while(queue.length) {

//         let currentNode = queue.shift();
//         sum += currentNode.value;

//         if(currentNode.left) {
//             queue.push(currentNode.left);
//         }

//         if(currentNode.right) {
//             queue.push(currentNode.right);
//         }
//     }

//     return sum;
    
// }


// DFS

function totalSum(root) {
    if(!root) return 0;
    return root.value + totalSum(root.left) + totalSum(root.right); 
};

console.log(totalSum(a))


// complexity
// time o(n) space o(n)