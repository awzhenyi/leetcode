---
tags:
 - Medium
---

https://leetcode.com/problems/koko-eating-bananas/

```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        #search on k, return min k that satisfies the condition that you finish all piles in h
        def canFinish(eating_speed: int):
            #given a eating speed, return if can finish piles in h hours
            total_time = 0
            for pile in piles:
                total_time += math.ceil(pile / eating_speed)
                if total_time > h:
                    return False
            return True

        l, r = 1, max(piles)
        while l < r:
            mid = (l + r) // 2
            if canFinish(mid):
                r = mid #cut r to the curr_min speed that can finish bananas
            else:
                l = mid + 1 #have to increase one if cannot finish
        return l
# Time Complexity: O(N Log N)
# Space Complexity: O(1)
```