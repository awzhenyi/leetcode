---
tags:
 - Easy
---

https://leetcode.com/problems/invert-binary-tree/

1. Base case: if not node, return None
2. left = recurse(node.right), right = recurse(node.left)
3. set node.left = right, node.right = left

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        
        def dfs(node):
            if not node: # if null
                return
            left = dfs(node.right)
            right = dfs(node.left)
            node.left = left
            node.right = right
            return node

        return dfs(root)
    
    #   4
    # 2   7
    #1 3 6 9

    #  4
    # 7  2
    #9 6 3 1
# Time Complexity: O(N)
# Space Complexity: O(N)
```