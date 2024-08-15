---
tags:
 - Medium
---

https://leetcode.com/problems/k-closest-points-to-origin/

```python
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for x, y in points:
            dist = math.sqrt((x**2) + (y**2))
            heapq.heappush(heap, (-dist, x, y))
            if len(heap) > k:
                heapq.heappop(heap)
        return [[x,y] for dist, x, y in heap]
# Time Complexity: O()
# Space Complexity: O()
```
