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


function maxPathSum(root) {
    if(!root) return -Infinity;

    if(root.left === null && root.right === null) return root.value;
    let maxPath = Math.max(maxPathSum(root.left), maxPathSum(root.right))

    return maxPath + root.value;
}

console.log(maxPathSum(a));



// complexity
// time o(n) space o(n)