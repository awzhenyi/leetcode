https://leetcode.com/problems/subtree-of-another-tree

1. Given a root and a subroot, return True if any subtree in root is the same tree as subroot
2. Brute force: traverse from root, for each of these nodes, run isSameTree function and see if any returns True

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def dfs(node):
            if not node:
                return False
            if isSameTree(node, subRoot):
                return True
            
            return dfs(node.left) or dfs(node.right)
        
        def isSameTree(node1, node2):
            #return if node and the subRoot are same tree by values
            # base cases
            if not node1 and not node2:
                return True
            if node1 and not node2:
                return False
            if node2 and not node1:
                return False
            # recursion
            l = isSameTree(node1.left, node2.left)
            r = isSameTree(node1.right, node2.right)
            # evaluation
            s = node1.val == node2.val
            return l and r and s

        return dfs(root)
# Time Complexity: O(MN), for each node in root, need to run another O(M) recursion isSameTree with subRoot
# Space Complexity: O(M + N) Call stack increased to M + N during the isSameTree call
```

Alternative: KMP string matching
1. Serializing tree, preorder with null node markers
2. If there are N nodes, there will be N+1 null nodes, hence the string will be 2N + 1
3. 