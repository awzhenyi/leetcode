Given a binary tree, the task is to check if it is a Sum Tree. A Sum Tree is a Binary Tree where the value of a node is equal to the sum of the nodes present in its left subtree and right subtree. An empty tree is Sum Tree and the sum of an empty tree can be considered as 0. A leaf node is also considered a Sum Tree.

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class Solution:
    def isSumTree(self, root):
        def dfs(node):
            if not node:
                return [True, 0]
            if not node.left and not node.right:
                return [True, node.val]
            l = dfs(node.left)
            r = dfs(node.right)
            s = l[1] + r[1] == node.val
            res = l and r and s
            return [res, l[1]+r[1]+node.val]
        return dfs(root)[0]
    
    def buildTree(self):
        root = Node(26)
        root.left = Node(10)
        root.right = Node(3)
        root.left.left = Node(4)
        root.left.right = Node(6)
        root.right.right = Node(3)
        return root
        
if __name__ == '__main__':
    s = Solution()
    root = s.buildTree()
    print(s.isSumTree(root))

# Time Complexity: O(N)
# Space Complexity: determined by depth of recursion stack, O(N) worst case on a skewed tree, O(log n) on average
```