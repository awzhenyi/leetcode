---
tags:
 - Medium
---

https://leetcode.com/problems/decode-ways

## Problem Understanding
A message containing letters can be encoded as numbers: A=1, B=2, ..., Z=26. Given an encoded string of digits, count how many ways it can be decoded back to letters.

**Constraints**:
- '0' cannot be decoded alone (must be part of "10" or "20")
- Two-digit numbers must be 10-26 to be valid

## Key Insight: Two Ways to Decode
At each position, we can decode in two ways:
1. **Single digit**: If digit is 1-9 (not '0'), decode as one letter
2. **Two digits**: If current digit + next digit form 10-26, decode as one letter

We need to count all possible combinations of these choices.

## Approach 1: Top-Down Memoization (Recursive)
Start from the beginning and recursively explore all decoding possibilities.

**State**: `dp(i)` = number of ways to decode substring starting from index `i`

**Logic**:
- Base case: if we've processed all characters (`i >= n`), return 1 (one valid way)
- Try single-digit decode: if `s[i] != '0'`, add ways from `dp(i+1)`
- Try two-digit decode: if `s[i]` is '1' or ('2' with next digit ≤ '6'), add ways from `dp(i+2)`

**Memoization**: Cache results to avoid recomputing the same subproblems

Top down w memoization
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        @cache
        def dp(i):
            if i >= n:
                return 1

            res = 0
            if s[i] != '0':    
                res += dp(i + 1)

            if i < n - 1 and (s[i] == '1' or (s[i] == '2' and s[i+1] <= '6')):
                res += dp(i + 2)
                
            return res

        return dp(0)
# Time Complexity: O(N)
#   - Each index is computed at most once due to memoization
#   - There are N possible starting positions
#   - Each computation is O(1)
# Space Complexity: O(N)
#   - Cache stores at most N results (one per index)
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP (Iterative, Right to Left)
Build up the solution by processing from right to left.

**State**: `dp[i]` = number of ways to decode substring starting from index `i` to the end

**Why right to left?**: 
- We need to know future results to compute current result
- `dp[i]` depends on `dp[i+1]` and `dp[i+2]`
- Base case: `dp[n] = 1` (one way to decode empty string)

**Logic**:
- Process from `n-1` down to `0`
- Single-digit decode: if `s[i] != '0'`, add `dp[i+1]` (ways after consuming one digit)
- Two-digit decode: if valid two-digit (10-26), add `dp[i+2]` (ways after consuming two digits)
- Answer is `dp[0]` (ways to decode entire string)

O(N) space bottom up. Let dp[i] be the number of ways to decode substring up till s[:i+1]. dp[i] = dp[i-1] if s[i] != '0'. ie it is a valid single encoding. dp[i] += dp[i-2] if s[i-1] and s[i] makes a valid double digit encoding.

```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0] * (n + 1)
        dp[n] = 1

        for i in range(n - 1, -1, -1):
            # one-digit decode
            if s[i] != '0':
                dp[i] = dp[i + 1]

            # two-digit decode
            if i + 1 < n and (s[i] == '1' or (s[i] == '2' and s[i + 1] <= '6')):
                dp[i] += dp[i + 2]

        return dp[0]
# Time Complexity: O(N)
#   - Single pass through the string (right to left)
#   - Each position is processed once
#   - Each iteration does O(1) work
# Space Complexity: O(N)
#   - DP array of size (n + 1)
#   - Stores result for each starting position
```

## Approach 3: Space-Optimized O(1) Solution
Since we only need `dp[i+1]` and `dp[i+2]` to compute `dp[i]`, we can use just two variables.

**Key Observation**: 
- Only need `dp[i+1]` (next position) and `dp[i+2]` (two positions ahead)
- As we process backwards, we can update these variables

**Variables**:
- `dp1` = `dp[i+1]` (ways from next position)
- `dp2` = `dp[i+2]` (ways from two positions ahead)
- `curr` = `dp[i]` (current position being computed)

**Update**: After computing `curr`, shift: `dp1, dp2 = curr, dp1`

O(1) Optimized space. Realize that all states only depended on 2 previous states, dp[i-1] and dp[i-2]
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0] * (n + 1)
        dp[n] = 1
        dp1, dp2 = 1, 0
        for i in range(n - 1, -1, -1):
            curr = 0
            # one-digit decode
            if s[i] != '0':
                curr += dp1

            # two-digit decode
            if i + 1 < n and (s[i] == '1' or (s[i] == '2' and s[i + 1] <= '6')):
                curr += dp2
            
            dp1, dp2 = curr, dp1

        return dp1

# Time Complexity: O(N)
#   - Single pass through the string (right to left)
#   - Each position is processed once
#   - Each iteration does O(1) work
# Space Complexity: O(1)
#   - Only using 3 variables (dp1, dp2, curr) regardless of input size
#   - No arrays or extra data structures needed
# Note: Since we process backwards, we need dp[i+1] and dp[i+2], not dp[i-1] and dp[i-2]
```
