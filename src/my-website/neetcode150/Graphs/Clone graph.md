---
tags:
 - Medium
---

https://leetcode.com/problems/clone-graph/

1. have a clone map to store cloned nodes
2. If a node has been cloned (check cloned dictionary.keys()), return from the cloned dictionary
3. Else make a new node and store it to the cloned dictionary
4. for each of node.neighbours, copy.neighbours.append(dfs(neighbour)).

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        cloned = {}
        def dfs(node):
            if node in cloned.keys():
                return cloned[node]
            copy = Node(node.val)
            cloned[node] = copy
            for neighbor in node.neighbors:
                copy.neighbors.append(dfs(neighbor))
            return copy
        return dfs(node)


# node 1, neighbours : 2, 4
# node 2, neighbours : 1, 3
# node 3, neighbours : 2, 4
# node 4, neighbours : 1, 3
# Time Complexity: O()
# Space Complexity: O()
```