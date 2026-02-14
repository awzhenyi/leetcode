---
tags:
 - Medium
---

https://leetcode.com/problems/balance-a-binary-search-tree

## Problem Understanding

Given an unbalanced binary search tree (BST), we need to convert it into a **balanced BST** where the heights of the left and right subtrees of any node differ by at most 1. This ensures optimal O(log n) time complexity for search, insert, and delete operations.

A balanced BST maintains the BST property (left < node < right) while ensuring the tree is as balanced as possible.

## Solution Approach

The solution uses a **two-step divide-and-conquer strategy**:

1. **In-order Traversal**: Convert the BST to a sorted array by traversing the tree in-order (left → node → right). Since in-order traversal of a BST always yields sorted values, we get all node values in ascending order.

2. **Balanced Tree Construction**: Recursively build a new balanced BST from the sorted array using a divide-and-conquer approach:
   - Find the middle element of the current range as the root (ensures balance)
   - Recursively build the left subtree from the left half of the array
   - Recursively build the right subtree from the right half of the array

## Why This Solution Works

**Key Insight**: By always choosing the middle element as the root at each level, we guarantee that:
- The left and right subtrees have approximately equal sizes
- The tree height is minimized (logarithmic)
- The BST property is preserved (since we're using the sorted array)

The algorithm works because:
- **In-order traversal preserves order**: All values to the left of the middle are smaller, and all values to the right are larger
- **Middle element as root**: Ensures balanced distribution of nodes between left and right subtrees
- **Recursive construction**: Each recursive call handles a smaller subproblem, building balanced subtrees

## Layman Explanation

Think of this problem like reorganizing books on a bookshelf:
- **Step 1**: Take all books off the shelf and arrange them in order (in-order traversal gives us sorted values)
- **Step 2**: Put them back on the shelf in a balanced way:
  - Find the middle book and put it at the center
  - Put all books before the middle on the left side (recursively balanced)
  - Put all books after the middle on the right side (recursively balanced)
  - This ensures the shelf doesn't lean too much to one side

For example, if you have books numbered 1-7 in a messy arrangement:
- First, you list them in order: [1, 2, 3, 4, 5, 6, 7]
- Then you organize: 4 goes in the middle, 1-3 go on the left (with 2 as their middle), and 5-7 go on the right (with 6 as their middle)
- This creates a perfectly balanced arrangement

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        inorder = []
        self.inOrderTraversal(root, inorder)
        return self.createBalancedBST(inorder, 0, len(inorder)-1)

    def inOrderTraversal(self, root: TreeNode, res: list):
        if not root:
            return
        self.inOrderTraversal(root.left, res)
        res.append(root.val)
        self.inOrderTraversal(root.right, res)
    
    def createBalancedBST(self, inorder: list, start:int, end: int) -> TreeNode:
        if start > end:
            print(start, end)
            return
        mid = (start + end) // 2
        left = self.createBalancedBST(inorder, start, mid - 1)
        right = self.createBalancedBST(inorder, mid + 1, end)
        root = TreeNode(inorder[mid], left, right)
        return root

# Time Complexity: O(n)
# - In-order traversal visits all n nodes: O(n)
# - Building balanced BST from sorted array visits each element once: O(n)
# - Total: O(n)

# Space Complexity: O(n)
# - The inorder array stores all n node values: O(n)
# - Recursion stack depth is O(log n) for balanced tree construction
# - Total: O(n) dominated by the array storage

