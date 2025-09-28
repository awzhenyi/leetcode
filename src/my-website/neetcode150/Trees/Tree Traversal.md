# Tree traversal
1. Inorder (https://leetcode.com/problems/binary-tree-inorder-traversal)
2. Preorder (https://leetcode.com/problems/binary-tree-preorder-traversal)
3. Postorder (https://leetcode.com/problems/binary-tree-postorder-traversal)

```python
class Solution:

    def inorder_traversal(self):
        inorder_output = []
        def traverse(node):
            if not node:
                return
            traverse(node.left)
            inorder_output.append(node.val)
            traverse(node.right)
        return inorder_output

    def preorder_traversal(self):
        preorder_output = []
        def traverse(node):
            if not node:
                return
            preorder_output.append(node.val)
            traverse(node.left)
            traverse(node.right)
        return preorder_output

    
    def postorder_traversal(self):
        postorder_output = []
        def traverse(node):
            if not node:
                return
            traverse(node.left)
            traverse(node.right)
            postorder_output.append(node.val)
        return postorder_output

    ###      5
    ###   3     7
    ###  1 4   6 9
    # preorder: [5,3,1,4,7,6,9]
    # inorder: [1,3,4,5,6,7,9]
    # postorer: [1,4,3,6,9,7,5]
# Time Complexity: O(N)
# Space Complexity: O(N)
```