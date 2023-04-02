
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



function BFS(root) {    
    
    let resut = []
    let queue = [];
    queue.push(root);

    while(queue.length) {
        let currentNode =  queue.shift();


        if(currentNode.left) {
            queue.push(currentNode.left);
        }


        if(currentNode.right) {
            queue.push(currentNode.right);
        }

        resut.push(currentNode.value);

    }

    return resut;
}


function BFSRecursive(queue = [], resut = []) {    
    if(!queue.length) {
        return resut;
    }

    let currentNode = queue.shift();

    if(currentNode) {
        resut.push(currentNode.value);

        if(currentNode.left) {
            queue.push(currentNode.left);
        }

        if(currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return BFSRecursive(queue, resut)

}


console.log(BFSRecursive([a]));




// complexity
// time o(n) space o(n)