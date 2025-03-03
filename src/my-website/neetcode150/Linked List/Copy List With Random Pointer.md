---
tags:
 - Medium
---

https://leetcode.com/problems/copy-list-with-random-pointer/

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        nodeToCreatedNodeMap = {}
        dummy = ans = Node(-1, None, None)
        while head:
            new_node = None
            if head not in nodeToCreatedNodeMap:
                new_node = Node(head.val, None, None)
                nodeToCreatedNodeMap[head] = new_node
            elif head in nodeToCreatedNodeMap:
                new_node = nodeToCreatedNodeMap[head]

            if not head.random:
                new_node.random = None
            elif head.random in nodeToCreatedNodeMap:
                new_node.random = nodeToCreatedNodeMap[head.random]
            elif head.random not in nodeToCreatedNodeMap:
                new_random_node = Node(head.random.val, None, None)
                nodeToCreatedNodeMap[head.random] = new_random_node
                new_node.random = new_random_node
            ans.next = new_node
            ans = ans.next
            head = head.next

        return dummy.next

# Time Complexity: O(N)
# Space Complexity: O(N)
```