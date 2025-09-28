---
tags:
 - Medium
---

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
<br/>
https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

1. get root node (preorder = 1st, postorder = last)
2. Find the root node index in inorder. Recurse left on left of inorder[:idx], right on inorder[idx+1:], exclude root index
3. Same for preorder and postorder, u exclude the root, and split left and right accordingly to index found in step 2.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None
        node = TreeNode(preorder[0])
        idx = inorder.index(node.val)
        node.left = self.buildTree(preorder[1:idx+1], inorder[:idx])
        node.right = self.buildTree(preorder[idx+1:], inorder[idx+1:])
        return node

# Time Complexity: O(N^2)
# Space Complexity: O(N)
```

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None
        node = TreeNode(postorder[-1])
        idx = inorder.index(node.val) #idx = 1
        node.left = self.buildTree(inorder[:idx], postorder[:idx])
        node.right = self.buildTree(inorder[idx+1:], postorder[idx:-1])
        return node
    
# Time Complexity: O(N^2)
# Space Complexity: O(N)
```
Optimized O(N). Notice that index and list splice is a O(N) operation. These can be optimized to a O(1) operation
1. Use a hashmap to store the index
2. Use left and right pointers to mark the start and end of the list instead of splicing    
```python
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # Build a hashmap to store value -> index relations for inorder traversal
        inorder_index_map = {val: idx for idx, val in enumerate(inorder)}

        # Initialize a pointer to keep track of the current root in preorder traversal
        self.preorder_index = 0

        def arrayToTree(left: int, right: int) -> Optional[TreeNode]:
            if left > right:
                return None

            # Get the current root value and move the pointer forward
            root_val = preorder[self.preorder_index]
            self.preorder_index += 1

            # Create the root node
            root = TreeNode(root_val)

            # Build left and right subtree using inorder_index_map
            root.left = arrayToTree(left, inorder_index_map[root_val] - 1)
            root.right = arrayToTree(inorder_index_map[root_val] + 1, right)

            return root

        return arrayToTree(0, len(inorder) - 1)
# Time Complexity: O(N)
# Space Complexity: O(N)
```

postorder linear time and space, build from right instead of left
```python
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        valToIdxMap = {v : i for i, v in enumerate(inorder)}
        postorder_idx = len(postorder) - 1
        def build(left, right):
            nonlocal postorder_idx
            if left > right:
                return
            node_val = postorder[postorder_idx]
            postorder_idx -= 1
            inorder_idx = valToIdxMap[node_val]
            node = TreeNode(node_val)
            node.right = build(inorder_idx + 1 , right)
            node.left = build(left, inorder_idx - 1)
            return node

        return build(0, len(inorder) - 1)
    
# Time Complexity: O(N)
# Space Complexity: O(N)
```