---
tags:
 - Easy
---

https://leetcode.com/problems/diameter-of-binary-tree/

1. nonlocal diameter variable
2. recursion: Base case, if not node: return 0 to leafs
3. update diameter at each node to be max(diameter, left + right)
4. When returning to parent node, return 1 + max(left, right)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0
        def dfs(node):
            nonlocal diameter
            if not node:
                return 0 
            left = dfs(node.left)
            right = dfs(node.right)
            diameter = max(diameter, left + right)
            return 1 + max(left, right)
        
        dfs(root)
        return diameter
# Time Complexity: O(N)
# Space Complexity: O(N)
```
