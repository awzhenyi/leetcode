---
tags:
 - Medium
---

https://leetcode.com/problems/jump-game-ii/

BFS style (go by level, at each level check the furthest u can reach, that will be the end_bound of the next level). BFS works because we are finding minimum jumps to get to last index.

```python
class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        n = len(nums)
        end_of_round = 0
        furthest = 0
        for i in range(n-1):
            furthest = max(furthest, nums[i] + i)
            if i == end_of_round:
                jumps += 1
                end_of_round = furthest
        return jumps
# Time Complexity: O(N)
# Space Complexity: O(1)
```