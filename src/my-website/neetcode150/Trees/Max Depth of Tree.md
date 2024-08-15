https://leetcode.com/problems/maximum-depth-of-binary-tree/

1. Base case: if node node, return 0
2. recurse on left, recurse on right
3. return 1 + max(left, right)

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # depth first tree traversal
        # maintain a count of the level as we traverse
        def dfs(node):
            if not node:
                return 0
            return max(dfs(node.left), dfs(node.right)) + 1
        
        return dfs(root)
# Time Complexity: O(N)
# Space Complexity: O(N)
```