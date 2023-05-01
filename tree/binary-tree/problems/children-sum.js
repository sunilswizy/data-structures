
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
} 


const a = new Node(2);
const b = new Node(35);
const c = new Node(10);
const d = new Node(2);
const e = new Node(3);
const f = new Node(5);
const g = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function childrenSum(root) {
    if(!root) return 0;

    let child = 0;

    if(root.left) {
        child += root.left.val;
    }

    if(root.right) {
        child += root.right.val;
    }

    if(child >= root.val) root.val = child;
    else {
        if(root.left) {
            root.left.val = root.val;
        }
    
        if(root.right) {
            root.right.val = root.val;
        }
    }


    let left = childrenSum(root.left);
    let right = childrenSum(root.right);

  
    let tot = 0;
    if(root.left) {
        tot += root.left.val;
    }

    if(root.right) {
        tot += root.right.val;
    }

    if(root.left || root.right) {
        root.val = tot;
    }

}

console.log(dfs(a));

childrenSum(a)


function dfs(root, result = []) {
    if(!root) return null;

    result.push(root.val)
    dfs(root.left, result);
    dfs(root.right, result);
    return result;
}

console.log(dfs(a));