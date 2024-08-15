https://leetcode.com/problems/binary-tree-maximum-path-sum

1. Base case return 0
2. At each node, calculate the max_sum (nonlocal variable) to be max_sum = max(max_sum, left + right + node)
3. Why u can simply take curr_path_sum to be left + right + ndoe, because the return from step 4. gaurantees either a postive value, or if all paths are negative, 0.
4. Returns max(left + node.val, right + node.val , 0) to parent node.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_sum = -inf
        def dfs(node):
            nonlocal max_sum
            if not node:
                return 0
            left_tree_sum = dfs(node.left)
            right_tree_sum = dfs(node.right)
            curr_path_sum = left_tree_sum + right_tree_sum + node.val
            max_sum = max(max_sum, curr_path_sum)
            return max(left_tree_sum + node.val, right_tree_sum + node.val, 0)

        dfs(root)
        return max_sum
# Time Complexity: O(N)
# Space Complexity: O(N)
```