---
tags:
 - Medium

sidebar_position: 4
---

https://leetcode.com/problems/subsets-ii

1. to skip duplicate, sort and do not process if nums[idx] == nums[idx-1]
```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        subsets = []
        def backtrack(i, accum):
            nonlocal subsets
            subsets.append(accum[:])
            for idx in range(i, len(nums)):
                if idx > i and nums[idx] == nums[idx-1]:
                    continue
                accum += [nums[idx]]
                backtrack(idx+1, accum)
                accum.pop()
        backtrack(0, [])
        return subsets
# Time Complexity: O(N * 2^N) deep copy of subset N in each recursion. total 2^N recursive calls
# Space Complexity: O(N)
```