---
tags:
 - Hard
---

https://leetcode.com/problems/serialize-and-deserialize-binary-tree

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        encoded = []
        def dfs(node):
            if not node:
                encoded.append("N")
                return
            encoded.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ','.join(encoded)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        idx = 0
        decoded = data.split(',')
        def build():
            nonlocal idx
            if decoded[idx] == 'N':
                idx += 1
                return None
            node = TreeNode(int(decoded[idx]))
            idx += 1
            node.left = build()
            node.right = build()
            return node

        return build()

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))

# Time Complexity: O(N)
# Space Complexity: O(N)
```

using iterator instead of index
```python
    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        decoded = iter(data.split(','))
        def build():
            val = next(decoded)
            if val == 'N':
                return None
            node = TreeNode(int(val))
            node.left = build()
            node.right = build()
            return node

        return build()
```