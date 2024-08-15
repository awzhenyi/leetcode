---
tags:
 - Easy
---

https://leetcode.com/problems/min-cost-climbing-stairs/

```python
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        dp = [0, 0]
        for i in range(2, n+1):
            jumpOne = dp[0] + cost[i-1]
            jumpTwo = dp[1] + cost[i-2]
            dp[0], dp[1] = min(jumpOne, jumpTwo), dp[0]
        return dp[0]
# Time Complexity: O(N)
# Space Complexity: O(1)
```