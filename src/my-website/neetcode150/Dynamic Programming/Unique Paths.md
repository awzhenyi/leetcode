---
tags:
 - Medium
---


Top Down. if row or cols out of bounds: return 0, if row == m-1 and col == n-1: return 1, ie reach destination

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        cache = {}
        def dp(i, j):
            if i >= m or j >= n:
                return 0
            if i == m-1 and j == n-1:
                return 1
        
            if (i, j) in cache:
                return cache[(i, j)]
                    
            res = dp(i+1, j) + dp(i, j+1)
            cache[(i, j)] = res
            return res
        
        return dp(0, 0)
# Time Complexity: O(N*M)
# Space Complexity: O(N*M)
```

Bottom Up DP. all borders have 1 way. every other square is the summation of left and up squares.

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[1] * n for _ in range(m)]
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        return dp[-1][-1]
# Time Complexity: O(N*M)
# Space Complexity: O(N*M)
```