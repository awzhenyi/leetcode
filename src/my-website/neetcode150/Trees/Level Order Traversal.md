https://leetcode.com/problems/binary-tree-level-order-traversal/

1. standard bfs queue and print node.val

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = collections.deque([root])
        output = []

        while queue:
            level_output = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level_output.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            output.append(level_output)
        return output
# Time Complexity: O(N)
# Space Complexity: O(N)
```