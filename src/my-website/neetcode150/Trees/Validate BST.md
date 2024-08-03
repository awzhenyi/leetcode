https://leetcode.com/problems/validate-binary-search-tree/

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def dfs(node, left_bound, right_bound):
            if not node:
                return True
            if node.val >= left_bound or node.val <= right_bound:
                return False

            l = dfs(node.left, node.val, right_bound)
            r = dfs(node.right, left_bound, node.val)

            return l and r
        return dfs(root, inf, -inf)
# Time Complexity: O(N)
# Space Complexity: O(N)
```

using inorder traversal properties

```python

# Time Complexity: O(N)
# Space Complexity: O(N)
```