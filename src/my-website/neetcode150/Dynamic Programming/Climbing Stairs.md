---
sidebar_position: 1
tags:
 - Easy
---

https://leetcode.com/problems/climbing-stairs

## Problem Understanding
You start at step 0 and need to reach step `n`. From any step you can climb either 1 or 2 steps. Count the number of distinct ways to reach exactly step `n`.

## Key Insight: Fibonacci Recurrence
Let `dp[i]` be the number of ways to reach step `i`.
- To reach step `i`, you could come from `i-1` (1 step) or `i-2` (2 steps).
- Therefore `dp[i] = dp[i-1] + dp[i-2]`.
This is the Fibonacci pattern with shifted indices.

1. 1D memoization

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[n] = 1

        for i in range(n - 1, -1, -1):
            dp[i] += dp[i + 1]
            if i + 2 <= n:
                dp[i] += dp[i + 2]

        return dp[0]
            
# Time Complexity: O(n) — single pass over n steps
# Space Complexity: O(n) — dp array of size n+1
```

2. Optimized space memoization

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        step_zero, step_one = 1, 1
        for i in range(n):
            step_zero, step_one = step_one, step_zero + step_one
        return step_zero
# Time Complexity: O(n) — single pass over n steps
# Space Complexity: O(1) — only two variables
```