---
tags:
 - Easy
---

https://leetcode.com/problems/same-tree/

1. Given 2 nodes p, q, check if they are the same tree
2. Define your base cases. if not p and not q, trivially True. if not p and q: False, if not q and p: False
3. Recurse on left and right.
4. Return left and right and (p.val == q.val)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if p and not q:
            return False
        if q and not p:
            return False
        return q.val == p.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
            
            
# Time Complexity: O(min(N, M)), where N = number of nodes in p, M = number of nodes in q
# Space Complexity: O(min(N, M))
```