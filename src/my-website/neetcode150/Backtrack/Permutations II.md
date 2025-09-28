---
tags:
 - Medium

sidebar_position: 6
---

https://leetcode.com/problems/permutations-ii

1. use sort and a used area to discard paths

```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        used = [0] * len(nums)
        permutations = []
        def backtrack(accum):
            nonlocal permutations
            if len(accum) == len(nums):
                permutations.append(accum[:])
                return
            for i in range(len(nums)):
                if used[i] or (i > 0 and nums[i] == nums[i-1] and not used[i - 1]):
                     continue
                accum += [nums[i]]
                used[i] = True
                backtrack(accum)
                used[i] = False
                accum.pop()
        backtrack([])
        return permutations

# Time Complexity: O(N * N!) worst case without duplicate will have N! permutations, in each permutation iterate over N elements
# Space Complexity: O(N) recursion stack space, if considering output then same as time complexity
```
