

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


function getHeight(root) {
    if(!root) return 0;

    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}


console.log(getHeight(a))