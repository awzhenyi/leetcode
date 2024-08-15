---
tags:
 - Medium
---

https://leetcode.com/problems/house-robber/

1. Top Down DP w Memo

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        memo = {}
        def dp(i):
            if i >= n:
                return 0
            if i in memo:
                return memo[i]
            
            amt = max(nums[i] + dp(i+2), dp(i+1)) 
            memo[i] = amt
            return amt
        return dp(0)
# Time Complexity: O()
# Space Complexity: O()
```

2. Bottom up DP

```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0] * n
        dp[0] = nums[0]
        for i in range(1, n):
            if i == 1:
                dp[i] = max(nums[i], dp[i-1])
            else:
                dp[i] = max(dp[i-2] + nums[i], dp[i-1])
        return dp[n-1]

# Time Complexity: O(N)
# Space Complexity: O(N)
```

3. Space optimized bottom up DP. Notice that the result only depends on the last 2 results.
```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1: 
            return nums[0]
        dp = [nums[0], nums[1]]
        for i in range(2, n):
            tmp = max(dp[0], dp[1])
            dp[1] = dp[0] + nums[i]
            dp[0] = tmp
        return max(dp)

# Time Complexity: O(N)
# Space Complexity: O(1)
```