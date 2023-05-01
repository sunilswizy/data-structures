//Construct Binary Tree from Preorder and Postorder Traversal

var constructFromPrePost = function (preorder, postorder) {
    let i = 0,
      j = 0;
    var builder = function (stop) {
      if (postorder[j] != stop) {
        var node = new TreeNode(preorder[i++]);
        node.left = builder(node.val);
        node.right = builder(node.val);
        j++;
        return node;
      }
      return null;
    };
    return builder();
  };


//Construct Binary Tree from Preorder and Inorder Traversal

  var buildTree = function (preorder, inorder) {
    let i = 0,
      j = 0;
    var builder = function (stop) {
      if (inorder[j] != stop) {
        var node = new TreeNode(preorder[i++]);
        node.left = builder(node.val);
        j++;
        node.right = builder(stop);
        return node;
      }
      return null;
    };
    return builder();
  };


  // Construct Binary Tree from Inorder and Postorder Traversal


  var buildTree = function (inorder, postorder) {
    let i = postorder.length - 1,
      j = postorder.length - 1;
    var builder = function (stop) {
      if (inorder[j] != stop) {
        var node = new TreeNode(postorder[i--]);
        node.right = builder(node.val);
        j--;
        node.left = builder(stop);
        return node;
      }
      return null;
    };
    return builder();
  };