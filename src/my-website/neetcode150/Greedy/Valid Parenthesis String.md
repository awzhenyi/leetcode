---
tags:
 - Medium
---

https://leetcode.com/problems/valid-parenthesis-string


Greedy
Track open brackets. Due to wildcard, use 2 variables (minOpenBracket and maxOpenBracket to track). If maxOpenBracket < 0, then we do not have enough for valid matching. if minOpenBracket < 0, reset to 0 (treat that some wildcard will be blank space)
```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        min_num_open_bracket = 0
        max_num_open_bracket = 0
        for c in s:
            if c == '(':
                min_num_open_bracket += 1
                max_num_open_bracket += 1
            elif c == ')':
                min_num_open_bracket -= 1
                max_num_open_bracket -= 1
            elif c == '*':
                min_num_open_bracket -= 1
                max_num_open_bracket += 1
            if max_num_open_bracket < 0:
                return False
            if min_num_open_bracket < 0:
                min_num_open_bracket = 0
        return min_num_open_bracket == 0
# Time Complexity: O(N)
# Space Complexity: O(1)
```

Top down DP with memo
```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        n = len(s)
        memo = {}
        
        def dp(i, num_open_brackets):
            if num_open_brackets < 0:
                return False
            if i >= n:
                return num_open_brackets == 0
            if (i, num_open_brackets) in memo:
                return memo[(i, num_open_brackets)]
            res = False
            if s[i] == '(':
                res |= dp(i+1, num_open_brackets + 1)
            elif s[i] == ')':
                res |= dp(i+1, num_open_brackets - 1)
            elif s[i] == '*':
                res |= (dp(i+1, num_open_brackets + 1) or 
                        dp(i+1, num_open_brackets - 1) or 
                        dp(i+1, num_open_brackets))
            memo[(i, num_open_brackets)] = res
            return res
        return dp(0, 0)
# Time Complexity: O(N^2)
# Space Complexity: O(N)
```
