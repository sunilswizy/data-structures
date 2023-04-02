class Node
{
    constructor(data)
    {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if(!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(newNode, this.root);
        }
    }

    insertNode(newNode, root) {

        if(!root) {
            return newNode;
        }

        let currentValue = root.val;

        if(currentValue > newNode.val) {
            root.left = this.insertNode(newNode, root.left);
        }
        else {
            root.right = this.insertNode(newNode, root.right);
        }

        return root;
    }

    dfs(root) {
        if(!root) return []
        
        return [root.val, ...this.dfs(root.left), ...this.dfs(root.right)]
    }
    
}

const BST = new BinarySearchTree();
console.log(BST.dfs(BST.root))
BST.insert(100)
BST.insert(30)
BST.insert(80)
BST.insert(50)
console.log(BST.root)
console.log(BST.dfs(BST.root))
