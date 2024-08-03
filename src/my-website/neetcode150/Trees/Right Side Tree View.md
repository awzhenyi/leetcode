https://leetcode.com/problems/binary-tree-right-side-view/

1. do bfs level traversal, only add the rightmost node in each level to the output

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        q = collections.deque([root])
        output = []
        while q:
            n = len(q)
            for i in range(n):
                node = q.popleft()
                if i == n-1:
                    output.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return output
            


# Time Complexity: O(N)
# Space Complexity: O(N)
```