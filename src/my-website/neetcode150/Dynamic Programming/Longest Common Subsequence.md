---
tags:
 - Medium
---

https://leetcode.com/problems/longest-common-subsequence/

Top Down
```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        cache = {}
        def dp(i, j):
            if i >= len(text1) or j >= len(text2):
                return 0
            if (i, j) in cache:
                return cache[(i, j)]
            ans = 0
            if text1[i] == text2[j]:
                ans = 1 + dp(i+1, j+1)
            else:
                ans = max(dp(i+1, j), dp(i, j+1))
            cache[(i, j)] = ans
            return ans
        return dp(0, 0)

# Time Complexity: O()
# Space Complexity: O()
```

Bottom up
```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n+1) for _ in range(m+1)]
        for i in range(1, m+1):
            for j in range(1, n+1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = 1 + dp[i-1][j-1]
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[-1][-1]
                

# Time Complexity: O(N*M)
# Space Complexity: O(N*M)
```

Bottom up (space optimized)
```python
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        m = len(t)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(n + 1):
            dp[i][0] = 1
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if s[i - 1] == t[j - 1]:
                    dp[i][j] += dp[i - 1][j - 1]
                dp[i][j] += dp[i - 1][j]
        return dp[-1][-1]
# Time Complexity: O()
# Space Complexity: O()
```