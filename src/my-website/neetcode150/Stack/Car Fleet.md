---
tags:
 - Medium
---

https://leetcode.com/problems/car-fleet/

1. sort by nearest position to the target.
2. process each car and calculate time taken to reach target.
3. If time taken is lower than the last car processed, they will become 1 fleet.

```python
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        fleet = [] #stack
        sorted_positions = sorted([(pos, spd) for pos, spd in zip(position, speed)], reverse = True)
        for position, speed in sorted_positions:
            time_taken = (target - position) / speed
            if not fleet or time_taken > fleet[-1]:
                fleet.append(time_taken)
        return len(fleet)

# Time Complexity: O(N log N)
# Space Complexity: O(N)
```