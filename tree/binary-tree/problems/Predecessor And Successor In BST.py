
def predecessorSuccessor(root, key):

    pre = -1;
    suc = -1;
    curr = root;

    while curr:
        if curr.data >= key: 
            curr = curr.left;
        else:
            pre = curr.data;
            curr = curr.right;

    curr = root;

    while curr:
        if curr.data <= key: 
            curr = curr.right;           
        else:
            suc = curr.data;
            curr = curr.left;
    
    return [pre, suc]

