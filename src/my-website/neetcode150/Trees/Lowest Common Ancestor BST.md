https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

1. Traverse the tree iteratively by comparing the value of current node and target node p, q.
2. Based on BST properties, it will tell whether to go left, right or simply return the node as the answer.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        while True:
            if root.val > p.val and root.val > q.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                return root
# Time Complexity: O()
# Space Complexity: O()
```

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

1. For non BST variant, 

```python

# Time Complexity: O()
# Space Complexity: O()
```