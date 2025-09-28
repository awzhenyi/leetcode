---
tags:
 - Medium
---

https://leetcode.com/problems/count-good-nodes-in-binary-tree/
1. pass a bound which is the current max that the path has seen, so node at each level knows what value to compare against.
2. base case, if not node: return 0, since this function returns the number of good nodes
3. get the left and right subtree good nodes count, and add 1 if the node.val is >= than the upper_bound.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, upper_bound):
            if not node:
                return 0
            upper_bound = max(upper_bound, node.val)
            l = dfs(node.left, upper_bound)
            r = dfs(node.right, upper_bound)
            return (node.val >= upper_bound) + l + r

        return dfs(root, -inf)

# Time Complexity: O(N)
# Space Complexity: O(N)
```