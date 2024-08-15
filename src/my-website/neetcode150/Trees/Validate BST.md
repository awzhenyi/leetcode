https://leetcode.com/problems/validate-binary-search-tree/

1. Have a left and right bound that updates accordingly in each recursion. Base case: if not node: return True (trivially valid BST)
2. node.val must be always less than left bound, and more than right_bound. If this pattern does not hold, return False
3. when recursing on left node, change left bound to node.val. Similarly, when recursing on right node, change right bound to node.val
4. return left and right

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

1. using inorder traversal properties, a BST will have a sorted inorder output

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        inorder_output = []
        def dfs(node):
            nonlocal inorder_output
            if not node:
                return
            dfs(node.left)
            inorder_output.append(node.val)
            dfs(node.right)
    
        dfs(root)
        for i in range(1, len(inorder_output)):
            if inorder_output[i] <= inorder_output[i-1]:
                return False
        return True
# Time Complexity: O(N)
# Space Complexity: O(N)
```

1. Optimized Space approach. Short circuiting asap instead of collecting and iterate at the end
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        stack = []
        curr = root
        prev = None
        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            if prev and prev.val >= curr.val:
                return False
            prev = curr
            curr = curr.right
        return True
# Time Complexity: O()
# Space Complexity: O()
```