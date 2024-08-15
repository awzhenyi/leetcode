---
tags:
 - Medium
---

https://leetcode.com/problems/cheapest-flights-within-k-stops

1. Modified dijkstra where the stops are the limiting factor instead of the distance
2. simply push dist + neighbour dist into heap instead of updating
3. The first route with destination reached will be least price under k

```python
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = defaultdict(list)
        for u, v, price in flights:
            graph[u].append((price, v))
        stops = [inf] * n
        stops[src] = 0
        heap = [(0, 0, src)]
        while heap:
            price, stop, node = heapq.heappop(heap)
            if node == dst:
                return price
            if stop >= k + 1: 
                continue
            for neighbour_price, neighbour_node in graph[node]: 
                if stop < stops[neighbour_node]:
                    heapq.heappush(heap, (neighbour_price + price, stop + 1, neighbour_node))
        return -1
# Time Complexity: O(N+E⋅K⋅log(E⋅K))
# Space Complexity: O()
```