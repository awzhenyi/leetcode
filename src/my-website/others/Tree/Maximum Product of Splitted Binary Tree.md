---
tags:
 - Medium
---

https://leetcode.com/problems/maximum-product-of-splitted-binary-tree

## Problem Understanding
Remove one edge from the binary tree to split it into two subtrees. Find the maximum product of the sums of the two resulting subtrees.

**Example**: If we remove an edge and get subtrees with sums 15 and 20, the product is 15 × 20 = 300.

## Key Insight: Try All Possible Splits
Removing any edge creates two subtrees:
- One subtree (the one we cut off)
- The remaining tree (everything else)

**Strategy**:
1. Calculate the sum of every possible subtree (by doing DFS)
2. For each subtree sum, calculate the product: `subtree_sum × (total_sum - subtree_sum)`
3. Find the maximum product

**Why this works**: Every edge removal corresponds to one subtree. By trying all subtree sums, we try all possible edge removals.

## Algorithm
1. **DFS to calculate subtree sums**: 
   - For each node, calculate sum of its subtree (including itself)
   - Store all subtree sums in a list
   - The last value is the total tree sum

2. **Try all splits**:
   - For each subtree sum, calculate product: `subtree_sum × (total_sum - subtree_sum)`
   - Track the maximum product

3. **Return result**: Maximum product modulo `10^9 + 7`

**Note**: We don't need to actually remove edges - we just need to know what the subtree sums would be if we removed each edge.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        subtree_values = []
        def dfs(node):
            if not node:
                return 0
            subtree_sum = dfs(node.left) + dfs(node.right) + node.val
            subtree_values.append(subtree_sum)
            return subtree_sum
        total_tree_sum = dfs(root)
        ans = 0
        MOD = 10**9 + 7
        for value in subtree_values:
            ans = max(ans, value * (total_tree_sum - value) % MOD)
        return ans
# Time Complexity: O(N)
#   - N = number of nodes in the tree
#   - DFS traversal: O(N) to visit all nodes once
#   - Calculate subtree sums: O(1) per node
#   - Try all splits: O(N) to iterate through all subtree sums
#   - Total: O(N)
# Space Complexity: O(N)
#   - Recursion stack: O(H) where H is height (O(N) worst case for skewed tree)
#   - Subtree values list: O(N) to store all subtree sums
#   - Total: O(N)
```