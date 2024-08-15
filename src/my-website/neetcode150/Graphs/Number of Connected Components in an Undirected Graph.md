---
tags:
 - Medium
---

https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph

1. Union Find. Start with N connected components, every successful union -1 connected components

```python
class UnionFind():

    def __init__(self, n):
        self.parent = [i for i in range(n)]
        self.size = [1] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        parent_x = self.find(x)
        parent_y = self.find(y)
        if parent_x != parent_y:
            if self.size[parent_x] < self.size[parent_y]:
                parent_x, parent_y = parent_y, parent_x
            self.parent[parent_y] = parent_x
            self.size[parent_x] += self.size[parent_y]
            return True

        return False

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind(n)
        connected_components = n
        for u, v in edges:
            connected_components -= uf.union(u, v)
        return connected_components
# Time Complexity: O(V+E) E queries of approximate O(1) time due to path compression
# Space Complexity: O(V)
```

1. Usual DFS with visited array. Every connected component will be 1 DFS call

```python
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        visited = set()
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        def dfs(node):
            visited.add(node)
            for neighbour in graph[node]:
                if neighbour not in visited:
                    visited.add(neighbour)
                    dfs(neighbour)
        
        cc = 0
        for i in range(n):
            if i not in visited:
                dfs(i)
                cc += 1
                
        return cc
    # def countCompon
# Time Complexity: O(V+E)
# Space Complexity: O(V+E)
```
