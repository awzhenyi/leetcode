---
tags:
 - Easy
---

https://leetcode.com/problems/climbing-stairs

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1: return 1
        dp = [1, 1]
        for i in range(2, n+1):
            curr = dp[0] + dp[1]
            dp[0], dp[1] = curr, dp[0]
        return dp[0]
            
# Time Complexity: O()
# Space Complexity: O()
```