https://leetcode.com/problems/evaluate-boolean-binary-tree/description

```python
 # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        def dfs(node):
            if not node:
                return
            if not node.left and not node.right:
                return node.val
            l = dfs(node.left)
            r = dfs(node.right)
            if node.val == 2:
                return l or r
            elif node.val == 3:
                return l and r

        return dfs(root)
```