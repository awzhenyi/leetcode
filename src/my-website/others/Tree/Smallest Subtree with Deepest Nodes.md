---
tags:
 - Medium
---

https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes

## Problem Summary
Given a binary tree, find the smallest subtree that contains all the deepest nodes. The deepest nodes are those at the maximum depth from the root.

## Solution Approach
The solution uses a bottom-up DFS approach. For each node, we calculate the maximum depth in both left and right subtrees, and determine which subtree contains the deepest nodes.

**Key Insight**: 
- If both subtrees have the same maximum depth, the current node is the lowest common ancestor (LCA) of all deepest nodes, so it becomes the root of our answer subtree.
- If one subtree is deeper, the deepest nodes must be in that subtree, so we return the result from that side.

**How it works**:
1. Traverse the tree from bottom to top using DFS
2. For each node, get the maximum depth and the answer node from both left and right children
3. Compare depths:
   - **Equal depths**: The current node is the LCA of all deepest nodes (they're distributed on both sides)
   - **Unequal depths**: The deeper side contains all deepest nodes, so return that side's result
4. The depth is incremented by 1 as we go up the tree

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

        def dfs(node):
            if not node:
                return (0, None)

            left_depth, left_node = dfs(node.left)
            right_depth, right_node = dfs(node.right)

            if left_depth == right_depth:
                return (1 + left_depth, node)

            if left_depth > right_depth:
                return (1 + left_depth, left_node)
            elif right_depth > left_depth:
                return(1 + right_depth, right_node)

        return dfs(root)[1]
# Time Complexity: O(n) where n is the number of nodes in the tree
#   - We visit each node exactly once during the DFS traversal
# Space Complexity: O(h) where h is the height of the tree
#   - The recursion stack depth equals the height of the tree
#   - In the worst case (skewed tree), h = n, so O(n)
#   - In the best case (balanced tree), h = log(n), so O(log n)
```