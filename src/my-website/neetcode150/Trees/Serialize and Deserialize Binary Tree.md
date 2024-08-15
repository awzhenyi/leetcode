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
        # Traverse in preorder
        # if there is a node, we append the value to the string
        # we append "N" to the string to represent null nodes
        serialized_string = []
        def traverse(node):
            if not node:            
                serialized_string.append("N")
                return
            serialized_string.append(str(node.val))
            traverse(node.left)
            traverse(node.right)
        traverse(root)
        return ','.join(serialized_string)

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """ 
        data = data.split(",")
        def buildTree(serialized_data, idx):
            if data[idx] == "N":
                return None
            node = TreeNode(int(serialized_data[idx]))
            idx += 1
            node.left = buildTree(serialized_data, idx)
            node.right = buildTree(serialized_data, idx)
            return node

        return buildTree(data, 0)
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))

# Time Complexity: O(N)
# Space Complexity: O(N)
```