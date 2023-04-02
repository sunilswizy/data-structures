
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        }
        else {
           this.traverseFindElement(value)
        }
    }

    lookup(value) {

        if(!this.root) {
            return null;
        }
        let currentNode = this.root;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            else if(currentNode.value < value) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }

        return null;
    }

    traverseFindElement(value) {

        let currentNode = this.root;
        const newNode = new Node(value);

        while(true) {
            // console.log("currentNode ", currentNode)
            if(currentNode.value < value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right; 
            }
            else {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
                // console.log("failes", currentNode)
            }  
        }
    }

    // remove(value) {
    //     if(!this.root) {
    //         return false;
    //     }

    //     let currentNode = this.root;
    //     let parentNode = null;
    //     while(currentNode) {
    //         if(currentNode.value === value) {
    //             if(currentNode.right === null) {

    //             }
    //             else if(currentNode.right.left === null) {

    //             }
    //             else {

    //             }
    //         }
    //         else if(currentNode.value < value) {
    //             parentNode = currentNode;
    //             currentNode = currentNode.right;
    //         }
    //         else {
    //             parentNode = currentNode;
    //             currentNode = currentNode.left;
    //         }
    //     }
    // }


  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

}


const tree = new BinaryTree();

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

// console.log("look", tree.lookup(9));

function traverse(node) {
    // console.log("caled", node)
    if(this.node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : traverse(node.left);
        tree.right = node.right === null ? null : traverse(node.right);
    }

    return tree;
}

  
// console.log(JSON.stringify(traverse(tree.root)))


//       9
//    4    20
// 1  6  15   170

//BFS -  9 4 20 1 6 15 170
//DFS - 9 4 1 6 20 15 170

// preorder - [9, 4, 1, 6, 20, 15, 170]
// inorder - [1, 4, 6, 9, 15, 20, 170]
// postorder - [1, 6, 4, 15, 170, 20, 9]

function DFSwithPreorder(node ,items) {
  // console.log("tree", node && node.value);
  let tree = {};
  if(node) {
    // let temp = tree
    tree = { value: node.value };
    items.push(tree.value);
    // console.log("true...");
    tree.left = node.left === null ? null : DFS(node.left, items);
    tree.right = node.right === null ? null : DFS(node.right, items);
  }

  return items;
}

// console.log(DFSwithPreorder(tree.root, []))

function DFSwithInorder(node, items) {

  if(node) {

    if(node.left) {
      DFSwithInorder(node.left, items)
    }
    items.push(node.value)

    if(node.right) {
      DFSwithInorder(node.right, items)
    }

  }

  return items;
}

// console.log(DFSwithInorder(tree.root, []));


function DFSwithPostOrder(node, items) {
  if(node) { 

    if(node.left) {
      DFSwithPostOrder(node.left, items)
    }

    if(node.right) {
      DFSwithPostOrder(node.right, items)
    }

    items.push(node.value)

  }

  return items;
}

console.log(DFSwithPostOrder(tree.root, []))




function BFS(node) {
    let currentNode = node;
    let list = [];
    let queue = [currentNode];

    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if(currentNode.left) {
        queue.push(currentNode.left);
      }

      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
}


function BFSWithRecursive(queue, list) {

    if(!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if(currentNode.left) {
      queue.push(currentNode.left);
    }

    if(currentNode.right) {
      queue.push(currentNode.right);
    }

    return BFSWithRecursive(queue, list)
}

// console.log(BFSWithRecursive([tree.root], []))
// console.log("items", items)


// if(root.left && root.right) {
    // console.log("root", root.left.val, root.right.val)
    //     if(!((root.val < root.right.val) && (root.val > root.left.val))) {
    //         console.log("falsed")
    //         check = false;
    //     }
    // }
    // else if(root.left) {
    //     if(!(root.val > root.left.val)) {
    //         console.log("left", root.val, root.left)
    //         check = false;
    //     }
    // }
    // else if(root.right) {
    //     if(!(root.val < root.right.val)) {
    //         console.log("rightr", root.val, root.right)
    //         check = false;
    //     }
    // }
    
    // if(root.left) {
    //     checkValid(root.left, check)
    // }

    //  if(root.right) {
    //     checkValid(root.right, check)
    // }