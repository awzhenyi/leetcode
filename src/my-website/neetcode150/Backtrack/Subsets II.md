---
tags:
 - Medium

sidebar_position: 4
---

https://leetcode.com/problems/subsets-ii

1. to skip duplicate, sort and do not process if nums[idx] == nums[idx-1]
```python
class Solution:
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = []
        def backtrack(i, path):
            output.append(path[:])
            for idx in range(i, len(nums)):
                if idx > i and nums[idx] == nums[idx - 1]:
                    continue
                path.append(nums[idx])
                backtrack(idx + 1, path)
                path.pop()
        backtrack(0, [])
        return output
# Time Complexity: O(N * 2^N) deep copy of subset N in each recursion. total 2^N recursive calls
# Space Complexity: O(N)
```