---
tags:
 - Medium

sidebar_position: 5
---

https://leetcode.com/problems/permutations/

1. loop through all, skip the ones that are already in

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        permutations = []
        def backtrack(accum):
            nonlocal permutations
            if len(accum) == len(nums):
                permutations.append(accum[:])
                return
            for i in range(len(nums)):
                if nums[i] in accum:
                    continue
                accum += [nums[i]]
                backtrack(accum)
                accum.pop()
        
        backtrack([])
        return permutations
# Time Complexity: O(N * N!)
# Space Complexity: O(N)
```