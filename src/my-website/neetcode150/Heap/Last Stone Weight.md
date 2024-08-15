---
tags:
 - Easy
---

https://leetcode.com/problems/last-stone-weight/

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-stone for stone in stones]
        heapq.heapify(heap)
        while heap:
            if len(heap) == 1: break
            stone1 = heapq.heappop(heap)
            stone2 = heapq.heappop(heap)
            weight = abs(stone1) - abs(stone2)
            if weight > 0:
                heapq.heappush(heap, -weight)
        return -heap[0] if heap else 0
# Time Complexity: O(N log N)
# Space Complexity: O()
```