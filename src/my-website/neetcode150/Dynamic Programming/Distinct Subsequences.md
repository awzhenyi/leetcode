---
tags:
 - Hard
---

https://leetcode.com/problems/distinct-subsequences/

## Problem Understanding
Count the number of distinct subsequences of string `s` that equal string `t`. A subsequence is formed by deleting some characters from `s` without changing the order.

**Example**: `s = "rabbbit"`, `t = "rabbit"` → 3 ways
- `ra**b**bit` (delete first 'b')
- `rab**b**it` (delete second 'b')  
- `rabb**b**it` (delete third 'b')

## Key Insight: Two Choices at Each Character
For each character in `s`, we have two choices:
1. **Skip it**: Don't use this character in the subsequence
2. **Use it**: Use this character if it matches the current character we need from `t`

We need to count all combinations that form `t`.

## Approach 1: Top-Down Memoization (Recursive)
Use recursion to explore all subsequence possibilities.

**State**: `dp(i, curr)` = number of ways to form `t[curr:]` using `s[i:]`

**Logic**:
- Base case: if `curr == len(t)`, we've matched all of `t` → return 1 (one valid way)
- Invalid case: if `i >= n` but `curr < len(t)`, impossible → return 0
- For each character in `s`:
  - Always skip: `dp(i+1, curr)` (don't use current character)
  - Use if match: if `s[i] == t[curr]`, also try `dp(i+1, curr+1)` (use current character)
- Sum both possibilities

**Memoization**: Cache results to avoid recomputing the same subproblems

```python
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        @cache
        def dp(i, curr):
            if curr == len(t):
                return 1
            if i >= n:
                return 0
            res = 0
            res += dp(i + 1, curr)
            if s[i] == t[curr]:
                res += dp(i + 1, curr + 1)

            return res

        return dp(0, 0)
# Time Complexity: O(N × M)
#   - N = length of s, M = length of t
#   - Each state (i, curr) is computed at most once
#   - There are N × M possible states
#   - Each computation is O(1)
# Space Complexity: O(N × M)
#   - Cache stores at most N × M states
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP (2D Table)
Build up the solution using a 2D DP table.

**State**: `dp[i][j]` = number of ways to form `t[0:j]` using `s[0:i]`

**Logic**:
- Base case: `dp[i][0] = 1` for all `i` (one way to form empty string: delete all)
- For each character in `s` and each position in `t`:
  - If `s[i-1] == t[j-1]`: we can use this character → add `dp[i-1][j-1]` (ways to form `t[0:j-1]` using `s[0:i-1]`)
  - Always skip: add `dp[i-1][j]` (ways to form `t[0:j]` using `s[0:i-1]`, without using `s[i-1]`)
- Answer: `dp[n][m]` (ways to form all of `t` using all of `s`)

**Why 2D?**: We need to track both how much of `s` we've used and how much of `t` we've matched.

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
# Time Complexity: O(N × M)
#   - N = length of s, M = length of t
#   - Outer loop: iterate through N characters of s
#   - Inner loop: iterate through M characters of t
#   - Total: O(N × M)
# Space Complexity: O(N × M)
#   - 2D DP table of size (n+1) × (m+1)
#   - Stores count of ways for each (s position, t position) combination
```

## Approach 3: Space-Optimized 1D DP
Since we only need the previous row, use a 1D array and create a new one each iteration.

**Key Observation**: `dp[i][j]` only depends on `dp[i-1][j]` and `dp[i-1][j-1]`, so we only need one row at a time.

**Strategy**:
- Use `dp` for previous row, `new` for current row
- After processing each character of `s`, `dp = new` (update for next iteration)
- This avoids the need for a 2D table

**Why create new array?**: We need to read both `dp[j]` and `dp[j-1]` from the previous iteration before updating. We can't update in-place because `new[j]` depends on `dp[j]` (which would be overwritten if we updated in-place).

**Logic**:
- `new[0] = 1` (base case: one way to form empty string)
- For each position in `t`:
  - If `s[i] == t[j-1]`: add `dp[j-1]` (ways to form `t[0:j-1]` using previous characters)
  - Always add `dp[j]` (ways to form `t[0:j]` without using current character of `s`)

```python
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        n = len(s)
        m = len(t)
        dp = [0] * (m + 1)
        dp[0] = 1
        for i in range(n):
            new = [0] * (m + 1)
            new[0] = 1
            for j in range(1, m + 1):
                if s[i] == t[j - 1]:
                    new[j] += dp[j - 1]
                new[j] += dp[j]
            dp = new
        return dp[-1]
# Time Complexity: O(N × M)
#   - Same as approach 2: O(N × M)
#   - Still iterate through N characters of s and M characters of t
# Space Complexity: O(M)
#   - Two 1D arrays of size (m+1) (dp and new)
#   - Much better than O(N × M) when N is large
#   - Still need to create new array each iteration (can't update in-place)
```