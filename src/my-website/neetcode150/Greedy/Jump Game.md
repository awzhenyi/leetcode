---
tags:
 - Medium
---

https://leetcode.com/problems/jump-game/

greedily track furthest reachable index. If it is ever less than current index, it is not reachable.

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        furthest_can_reach = 0
        for i, jumps in enumerate(nums):
            #even with max jumps from some position before i-th position, i-th position is not reachable. hence jumps dies halfway.
            if furthest_can_reach < i: 
                return False 
            furthest_can_reach = max(furthest_can_reach, i + jumps)
        return True
# Time Complexity: O(N)
# Space Complexity: O(1)
