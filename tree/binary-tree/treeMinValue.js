class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node(13);
const b = new Node(11);
const c = new Node(14);
const d = new Node(24);
const e = new Node(12);
const f = new Node(10);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// BFS

// function minimumValue(root) {
//     if(!root) return null;

//     let queue = [ root ];
//     let minimumValue = Infinity;

//     while(queue.length) {

//         const currentNode = queue.shift();

//         if(minimumValue > currentNode.value) {
//             minimumValue = currentNode.value;
//         }

//         if(currentNode.left) {
//             queue.push(currentNode.left);
//         }

//         if(currentNode.right) {
//             queue.push(currentNode.right);
//         }

//     }

//     return minimumValue;
// }


// DFS

function minimumValue(root) {
    if(!root) return Infinity;

    let left = minimumValue(root.left);
    let right = minimumValue(root.right);


    // if(root.value < left && root.value < right) {
    //     return root.value;
    // }
    // else if(left < root.value && left < right) {
    //     return left;
    // }
    // else {
    //     return right;
    // }

    return Math.min(root.value, left, right);
}

console.log(minimumValue(a))



// complexity
// time o(n) space o(n)