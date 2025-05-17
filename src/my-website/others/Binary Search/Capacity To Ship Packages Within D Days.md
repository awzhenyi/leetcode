---
tags:
 - Medium
 - Tiktok
---

https://leetcode.com/problems/capacity-to-ship-packages-within-d-days

1. Binary search on answer space. lower bound of answer `space = max(weights)`, upper bound of `answer space = sum(weights)`

```python
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def can_ship(capacity: int) -> bool:
            days_needed, current_load = 1, 0
            for weight in weights:
                if current_load + weight > capacity:
                    days_needed += 1
                    current_load = 0
                current_load += weight
            return days_needed <= days

        left, right = max(weights), sum(weights)
        while left < right:
            mid = (left + right) // 2
            if can_ship(mid):
                right = mid
            else:
                left = mid + 1
        return left

# Time Complexity: O(N log (sum(weights)))
# Space Complexity: O(1)
```
