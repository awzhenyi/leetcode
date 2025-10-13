---
sidebar_position: 2
tags:
 - Easy
---
1. prepare max heap
2. pop 2 stones while len of heap > 1
3. stone1 is gauranteed `>=` stone2
4. put remaining stone value back to heap if > 0

https://leetcode.com/problems/last-stone-weight/

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-stone for stone in stones]
        heapq.heapify(heap)

        while len(heap) > 1:
            stone1 = heapq.heappop(heap) * -1
            stone2 = heapq.heappop(heap) * -1
            res = stone1 - stone2
            if res > 0:
                heapq.heappush(heap, -res)
        
        return -heap[0] if heap else 0

# Time Complexity: O(N log N)
# Space Complexity: O(N)
```