---
sidebar_position: 1
tags:
 - Easy
---

https://leetcode.com/problems/kth-largest-element-in-a-stream

```python
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.max_size = k
        self.heap = []
        for num in nums:
            heapq.heappush(self.heap, num)
            if len(self.heap) > self.max_size:
                heapq.heappop(self.heap)

    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.max_size:
            heapq.heappop(self.heap)
        
        return self.heap[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# Time Complexity: O(n log k)
# Space Complexity: O()
```