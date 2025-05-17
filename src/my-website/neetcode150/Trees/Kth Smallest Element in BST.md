---
tags:
 - Medium
---

https://leetcode.com/problems/kth-smallest-element-in-a-bst/
1. inorder and index k-1
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        inorder = []
        def dfs(node):
            if not node:
                return
            dfs(node.left)
            inorder.append(node.val)
            dfs(node.right)
        dfs(root)
        return inorder[k-1]

# Time Complexity: O(N)
# Space Complexity: O(N)
```

2. Iterative with early termination
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stack = []
        curr = root
        n = 0
        while stack or curr:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            n += 1
            if n == k:
                return curr.val
            curr = curr.right

# Time Complexity: O(K)
# Space Complexity: O(K)
```

3. Recursive with early termination
```python
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        position = 0
        def dfs(node):
            if not node:
                return -1
            nonlocal position
            left = dfs(node.left)
            if left != -1:
                return left
            position += 1
            if position == k:
                return node.val
            return dfs(node.right)

        return dfs(root)

# Time Complexity: O(K)
# Space Complexity: O(K)
```