---
tags:
 - Medium
---

https://leetcode.com/problems/decode-ways

Top down w memoization
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        cache = {}
        def dp(idx):
            if idx >= n:
                return 1
            if s[idx] == '0':
                return 0
            if idx in cache:
                return cache[idx]

            res = dp(idx+1)
            if idx < n-1 and (s[idx] == '1' or s[idx] == '2') and s[idx+1] <= '6':
                res += dp(idx+2)
            cache[idx] = res
            return res
        return dp(0)
# Time Complexity: O(N)
# Space Complexity: O(N)
```

O(N) space bottom up. Let dp[i] be the number of ways to decode substring up till s[:i+1]. dp[i] = dp[i-1] if s[i] != '0'. ie it is a valid single encoding. dp[i] += dp[i-2] if s[i-1] and s[i] makes a valid double digit encoding.

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0] * n
        dp[0] = 1 if s[0] != '0' else 0  # Base case: First character is not '0'

        for i in range(1, n):
            # Single digit decoding (check if the current character is valid)
            if s[i] != '0':
                dp[i] = dp[i-1]

            # Two-digit decoding (check if the two digits form a valid code)
            if s[i-1] == '1' or (s[i-1] == '2' and s[i] <= '6'):
                if i >= 2:
                    dp[i] += dp[i-2]  # Add dp[i-2] if there's a valid two-digit number
                else:
                    dp[i] += 1  # Special case for the first two digits

        return dp[n-1]
# Time Complexity: O(N)
# Space Complexity: O(N)
```

O(1) Optimized space. Realize that all states only depended on 2 previous states, dp[i-1] and dp[i-2]
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp1 = 1 if s[0] != '0' else 0  # Base case: First character is not '0'
        dp2 = 0

        for i in range(1, n):
            temp = 0
            # Single digit decoding (check if the current character is valid)
            if s[i] != '0':
                temp = dp1

            # Two-digit decoding (check if the two digits form a valid code)
            if s[i-1] == '1' or (s[i-1] == '2' and s[i] <= '6'):
                if i >= 2:
                    temp += dp2  # Add dp[i-2] if there's a valid two-digit number
                else:
                    temp += 1  # Special case for the first two digits
            dp2, dp1 = dp1, temp

        return dp1
# Time Complexity: O(N)
# Space Complexity: O(1)
```
