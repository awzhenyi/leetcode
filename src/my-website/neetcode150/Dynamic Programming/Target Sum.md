---
tags:
 - Medium
---

https://leetcode.com/problems/target-sum

Top Down With Memo

just keep running_sum and check if it is equal to target at the end
2 options: add or minus
```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        @cache
        def dp(i, running_sum):
            if i >= n:
                return running_sum == target
            return dp(i+1, running_sum+nums[i]) + dp(i+1, running_sum-nums[i])

        return dp(0, 0)

# Time Complexity: O(N*S), n = len(nums), s = sum(nums), cache can have O(N * S) possible states / subproblems
# Space Complexity: O(N*S)
```

Bottom up
```python

# Time Complexity: O()
# Space Complexity: O()
```