---
sidebar_position: 6
tags:
 - Medium
---

https://leetcode.com/problems/redundant-connection

1. Iterate the edges and check if the 2 vertices of the edge are reachable in the current graph state. if so, then this edge is redundant.
2. continue building to the graph after every edge

```python
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(list)

        seen = set()
        def dfs(start, end):
            nonlocal seen
            if start == end:
                return True
            seen.add(start)
            for neighbour in graph[start]:
                if neighbour not in seen and dfs(neighbour, end):
                    return True
            seen.remove(start)
            return False
        
        redundant = []
        for u, v in edges:
            if dfs(u, v):
                redundant = [u, v]
            graph[u].append(v)
            graph[v].append(u)
        
        return redundant
# Time Complexity: O(N^2) N = Vertices/Edges
# Space Complexity: O(N)
```

1. Union Find instead of Cycle Prevention

```python
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            par_x = find(x)
            par_y = find(y)
            if par_x != par_y:
                if size[par_x] < size[par_y]:
                    par_x, par_y = par_y, par_x
                parent[par_y] = par_x
                size[par_x] += size[par_y]
                return True
            return False

        redundant = []
        parent = list(range(1001))
        size = [1] * 1001

        for u, v in edges:
            if not union(u,v):
                redundant = [u,v]
        return redundant

# Time Complexity: O(E)
# Space Complexity: O(N)
```