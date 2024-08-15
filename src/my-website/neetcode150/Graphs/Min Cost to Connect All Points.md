---
tags:
 - Medium
---

https://leetcode.com/problems/min-cost-to-connect-all-points

1. Kruskal Algorithm to build MST. Sort edge by weight and add 1 by 1 to see if it forms a cycle.
2. Detect cycle with union find + rank compression. 

```python
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        edges = []
        n = len(points)
        for i in range(n-1):
            for j in range(i+1, n):
                x1, y1 = points[i]
                x2, y2 = points[j]
                manhattan_dist = abs(x1-x2) + abs(y1-y2)
                edges.append((manhattan_dist, i, j))
        edges.sort(key = lambda x : x[0])
        min_cost = 0        
        graph = defaultdict(list)
        
        parent = list(range(n))

        def union(x, y):
            par_x = find(x)
            par_y = find(y)
            if par_x != par_y:
                parent[par_y] = par_x
                return True
            return False

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

            return 
        for dist, i, j in edges:
            if union(i,j):
                min_cost += dist

        return min_cost
            
# Time Complexity: O(N) Kruksal -> E log E (sort edges), Union Find N queries, each queries is O(ackerman (N)) which is roughly O(1)
# Space Complexity: O(N) construction of graph
```