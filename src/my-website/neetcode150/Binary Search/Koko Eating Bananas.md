---
sidebar_position: 6
tags:
 - Medium
---

https://leetcode.com/problems/koko-eating-bananas/

## Problem Understanding
Koko needs to eat all bananas from `piles` within `h` hours. Each hour, she can eat at most `k` bananas from a single pile. Find the **minimum** eating speed `k` to finish all piles in time.

## Key Insight: Binary Search on Answer
Instead of trying every possible speed (which would be too slow), we use binary search to find the minimum valid speed.

**Why binary search works here:**
- If speed `k` works, then any faster speed also works (monotonic property)
- If speed `k` doesn't work, then any slower speed also won't work
- This lets us eliminate half the possibilities each time, just like binary search

## Approach

1. **Search space**: Try speeds from `1` to `max(piles)` (at max speed, each pile takes 1 hour)

2. **Check if a speed works**: For a given speed `k`, calculate total hours needed:
   - Each pile needs `ceil(pile / k)` hours
   - If total ≤ `h`, the speed works

3. **Binary search logic**:
   - If current speed works → try slower speeds (maybe we can go even slower)
   - If current speed doesn't work → try faster speeds (we need to eat faster)
   - Keep narrowing down until we find the minimum valid speed

```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        #search on k, return min k that satisfies the condition that you finish all piles in h
        def canFinish(eating_speed: int) -> bool:
            #given a eating speed, return if can finish piles in h hours
            total_time = 0
            for pile in piles:
                total_time += math.ceil(pile / eating_speed)
                if total_time > h:
                    return False
            return True

        #Alternative more pythonic function
        def pythonicCanFinish(k) -> bool:
            return sum(ceil(pile / k) for pile in piles) <= h

        l, r = 1, max(piles)
        while l < r:
            mid = (l + r) // 2
            if canFinish(mid):
                r = mid #cut r to the curr_min speed that can finish bananas
            else:
                l = mid + 1 #have to increase one if cannot finish
        return l

# Time Complexity: O(N * log(max(piles)))
#   - Binary search: O(log(max(piles))) iterations
#   - Each iteration: O(N) to check all piles
#   - If max(piles) ≈ N, this becomes O(N log N)
# Space Complexity: O(1)
```