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


function Allorder(root) {
    let preOrder = [];
    let inOrder = [];
    let postOrder = [];

    let stack = [{node: root, num: 1}];

    while(stack.length) {
        let currentNode = stack.pop();

        if(currentNode.num === 1) {
            preOrder.push(currentNode.node.value);
            currentNode.num++;
            stack.push(currentNode);

            if(currentNode.node.left) {
                stack.push({ node: currentNode.node.left, num: 1});
            }
        } 
        else if(currentNode.num === 2) {
            inOrder.push(currentNode.node.value);
            currentNode.num++;
            stack.push(currentNode);

            if(currentNode.node.right) {
                stack.push({ node: currentNode.node.right, num: 1});
            }
        }
        else {
            postOrder.push(currentNode.node.value);
        }
    }

    return {
        preOrder, inOrder, postOrder
    }

}


console.log(Allorder(a));

