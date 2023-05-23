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


function dfs(root) {
    if(!root) return [];
    return [root.value, ...dfs(root.left), ...dfs(root.right)];
}


console.log(dfs(a));





/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    public:
        vector<int> inorderTraversal(TreeNode* root) {
            vector<int> inorder;
            TreeNode *cur = root;
    
            while(cur != NULL) {
                if(cur->left == NULL) {
                    inorder.push_back(cur->val);
                    cur = cur->right;
                }
                else {
    
                    TreeNode *prev = cur->left;
    
                    while(prev->right && prev->right != cur) {
                        prev = prev->right;
                    }
    
                    if(prev->right == NULL) {
                        prev->right = cur;
                        cur = cur->left;
                    }
                    else {
                         prev->right = NULL;
                         inorder.push_back(cur->val);
                         cur = cur->right;
                    }
                }
            }
    
            return inorder;
        }
    };
    
    
    
