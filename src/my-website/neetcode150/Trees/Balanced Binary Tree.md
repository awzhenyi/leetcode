---
tags:
 - Easy
---

https://leetcode.com/problems/balanced-binary-tree/

1. Let your recursion return 2 things, a flag for whether the tree is balanced, plus the max depth of either the left or right subtree.
2. Base case: if not node, return [True, 0]. Trivially balanced tree with 0 depth
3. call `left = dfs(node.left)`, `right = dfs(node.right)`
4. left[0] and right[0] and `abs(left - right) < 2` siginifies balanced tree at this node
5. return [l[0] and r[0], `abs(left - right) < 2`, 1 + max(left[1], right[1])]

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(node): #recursive function that will return isbalanced at each node, the height of each node
            if not node:
                return [True, 0]
            left = dfs(node.left)
            right = dfs(node.right)
            isTreeBalanced = left[0] and right[0] and abs(left[1] - right[1]) < 2
            return [isTreeBalanced, 1 + max(left[1], right[1])]

        return dfs(root)[0]
# Time Complexity: O(N)
# Space Complexity: O(N)
```