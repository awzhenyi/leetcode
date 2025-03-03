---
tags:
 - Medium
---

https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii

heap + simulate

```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        heap = [num for num in nums]
        heapq.heapify(heap)
        ops = 0
        while len(heap) >= 2 and heap[0] < k:
            n1 = heapq.heappop(heap)
            n2 = heapq.heappop(heap)
            res = min(n1, n2) * 2 + max(n1, n2)
            heapq.heappush(heap, res)
            ops += 1
        return ops
        
# Time Complexity: O(N log N)
# Space Complexity: O(N) heap size
```