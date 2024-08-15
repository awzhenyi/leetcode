---
tags:
 - Hard
---

https://leetcode.com/problems/swim-in-rising-water/

1. BFS with heap since heap will get the shortest path in this case.

```python
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        heap = [(grid[0][0], 0, 0)]
        visited = set()
        while heap:
            t, r, c = heapq.heappop(heap)
            if r == n-1 and c == n-1:
                return t
            for _r, _c in [(r+1, c), (r-1, c), (r, c+1), (r, c-1)]:
                if 0 <= _r < n and 0 <= _c < n and (_r,_c) not in visited:
                    visited.add((_r,_c))
                    _t = max(t, grid[_r][_c])
                    heapq.heappush(heap, (_t, _r,_c))
# Time Complexity: O(N * Log N), where N = total elements in grid
# Space Complexity: O(N)
```