
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


function DFS(currentNode, resut = []) {    
    // console.log(currentNode)
    if(!currentNode) {
        return resut;
    }

    resut.push(currentNode.value);


    if(currentNode.left) {
        DFS(currentNode.left, resut)
    }

    if(currentNode.right) {
        DFS(currentNode.right, resut)
    }

    return resut;
}

console.log(DFS(a));


// complexity
// time o(n) space o(n)



function DFSWithStack(root) {

    if(!root) return [];

    let stack = [];
    let result = [];
    stack.push(root);

    while(stack.length) {
        let currentNode = stack.pop();

        result.push(currentNode.value);

        if(currentNode.right) {
            stack.push(currentNode.right);
        }

        if(currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    return result;

}

console.log(DFSWithStack(a));


function DFSSimpleWay(root) {
    if(!root) return [];

    let left = DFSSimpleWay(root.left);
    let right = DFSSimpleWay(root.right);

    return [root.value, ...left, ...right]
}

console.log(DFSSimpleWay(a));



// complexity
// time o(n) space o(n)