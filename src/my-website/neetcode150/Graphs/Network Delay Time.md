---
sidebar_position: 16
tags:
 - Medium
---

https://leetcode.com/problems/network-delay-time/

1. Pretty standard dijkstra

```python
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        distance = [inf] * (n+1)
        distance[k] = 0
        graph = defaultdict(list)
        for u, v, time in times:
            graph[u].append((time, v))

        heap = [(0, k)]
        while heap:
            dist, node = heapq.heappop(heap)
            for neighbour in graph[node]:
                if distance[node] + neighbour[0] < distance[neighbour[1]]:
                    distance[neighbour[1]] = distance[node] + neighbour[0]
                    heapq.heappush(heap, (neighbour[0], neighbour[1]))

        ans = 0
        for d in distance[1:]:
            if d == inf:
                return -1
            ans = max(ans, d)
        return ans
# Time Complexity: O(V+E log V)
# Space Complexity: O(V)
```