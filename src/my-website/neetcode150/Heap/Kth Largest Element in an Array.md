---
tags:
 - Medium
---

https://leetcode.com/problems/kth-largest-element-in-an-array/

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]
# Time Complexity: O(N log k)
# Space Complexity: O()
```