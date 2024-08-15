---
tags:
 - Medium
---
https://leetcode.com/problems/graph-valid-tree/

1. same as detecting cycles for directed graph. But with undirected graph, simply add a parent node parameter to avoid travelling back to the parent.

```python
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        #check for cycle + disconnectness
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        
        visited = [0] * n
        def isCyclic(node, parent):
            if visited[node] == 1:
                return True
            visited[node] = 1
            for neighbour in graph[node]:
                if neighbour != parent and visited[neighbour] != 2 and isCyclic(neighbour, node):
                    return True
            visited[node] = 2
            return False

        return not isCyclic(0, -1) and sum(visited) == n*2

# Time Complexity: O(V+E)
# Space Complexity: O(V+E)
```