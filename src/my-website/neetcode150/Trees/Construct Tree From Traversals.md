1. get root node (preorder = 1st, postorder = last)
2. Find the root node index in inorder. Recurse left on left of inorder[:idx], right on inorder[idx+1:], exclude root index
3. Same for preorder and postorder, u exclude the root, and split left and right accordingly to index found in step 2.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None
        node = TreeNode(preorder[0])
        idx = inorder.index(node.val)
        node.left = self.buildTree(preorder[1:idx+1], inorder[:idx])
        node.right = self.buildTree(preorder[idx+1:], inorder[idx+1:])
        return node

# Time Complexity: O(N)
# Space Complexity: O(N)
```

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None
        node = TreeNode(postorder[-1])
        idx = inorder.index(node.val) #idx = 1
        node.left = self.buildTree(inorder[:idx], postorder[:idx])
        node.right = self.buildTree(inorder[idx+1:], postorder[idx:-1])
        return node
    
# Time Complexity: O(N)
# Space Complexity: O(N)
```