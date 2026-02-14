https://leetcode.com/problems/palindromic-substrings/

## Problem Understanding
Count the total number of palindromic substrings in a given string. A palindrome reads the same forwards and backwards.

**Example**: `s = "abc"` → 3 palindromes: `"a"`, `"b"`, `"c"`  
**Example**: `s = "aaa"` → 6 palindromes: `"a"`, `"a"`, `"a"`, `"aa"`, `"aa"`, `"aaa"`

## Approach 1: Recursive (Inefficient, No Memoization Benefit)
Check each substring recursively, but memoization doesn't help much here.

**Why cache doesn't work well**:
- The function `dp(i)` counts palindromes starting from position `i`
- Each call checks all substrings starting at `i` (O(N) work)
- The result depends on the entire substring `s[i:]`, not just `i`
- We only call `dp(i)` once for each `i`, so there's no repeated computation to cache
- The expensive part is checking if each substring is a palindrome, which we do directly

**Logic**:
- For each starting position `i`, check all substrings starting at `i`
- Count how many are palindromes
- Recursively count palindromes starting from `i+1`

**Inefficiency**: Checking each substring is O(N), and we do this for O(N²) substrings → O(N³) total

check each substring recursion
- explain why a cache (top down memoization) does not really work for the solution below
```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        def isPalindrome(s):
            return s == s[::-1]

        def dp(i):
            if i >= len(s):
                return 0
            res = 0
            for idx in range(i, len(s)):
                res += isPalindrome(s[i:idx + 1])
            res += dp(i + 1)
            return res
        
        return dp(0)
# Time Complexity: O(N³)
#   - N = length of string
#   - For each starting position i: O(N) iterations
#   - For each substring: O(N) to check if palindrome
#   - Total: O(N × N × N) = O(N³)
# Space Complexity: O(N)
#   - Recursion stack depth is at most N
#   - No memoization benefit (each dp(i) called once)
```

## Approach 2: Bottom-Up DP (Efficient)
Use DP to check if each substring is a palindrome, reusing results from smaller substrings.

**Key Insight**: A substring `s[i:j+1]` is a palindrome if:
- `s[i] == s[j]` (ends match)
- `s[i+1:j]` is a palindrome (inner substring is palindrome)

**State**: `dp[i][j]` = whether substring `s[i:j+1]` is a palindrome

**Logic**:
- Process substrings by length: 1, 2, 3, ..., n
- Base cases:
  - Length 1: always palindrome → `dp[i][i] = True`
  - Length 2: check if `s[i] == s[j]`
- For length ≥ 3: `dp[i][j] = (s[i] == s[j]) AND dp[i+1][j-1]`
- Count all `True` values

**Why process by length?**: We need smaller substrings computed before larger ones (they're dependencies).

2. Bottom up dynamic programming
```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [[False] * n for _ in range(n)]
        ans = 0
        
        for length in range(1, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                if length == 1:
                    dp[i][j] = True
                    ans += 1
                elif length == 2:
                    dp[i][j] = (s[i] == s[j])
                    ans += dp[i][j]
                else:
                    dp[i][j] = dp[i + 1][j - 1] and s[i] == s[j]
                    ans += dp[i][j]
        return ans
# Time Complexity: O(N²)
#   - N = length of string
#   - Outer loop: iterate through lengths (1 to n) = O(N)
#   - Inner loop: iterate through starting positions = O(N)
#   - Each palindrome check is O(1) (just array lookup)
#   - Total: O(N × N) = O(N²)
# Space Complexity: O(N²)
#   - 2D DP table of size N × N
#   - Stores boolean result for each substring
```

## Approach 3: Expand from Center (Optimal)
For each possible center, expand outward to find all palindromes centered there.

**Key Insight**: Every palindrome has a center. We can find all palindromes by checking each possible center.

**Two types of centers**:
- **Odd length**: center is a single character (e.g., `"aba"` centered at 'b')
- **Even length**: center is between two characters (e.g., `"abba"` centered between two 'b's)

**Logic**:
- For each position `i`:
  - Expand from `(i, i)` for odd-length palindromes
  - Expand from `(i, i+1)` for even-length palindromes
- `expand(i, j)` counts palindromes by expanding outward while characters match
- Stop when characters don't match or we go out of bounds

**Why it's optimal**: 
- Each palindrome is found exactly once
- No redundant checks
- O(N²) time but with better constant factors than DP

3. Expand from centre (optimal)
```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        def expand(i, j):
            count = 0
            while i >= 0 and j < n: 
                if s[i] != s[j]:
                    break
                count += 1
                i -= 1
                j += 1
            return count
        ans = 0
        for i in range(n):
            ans += expand(i, i)
            ans += expand(i, i + 1)
        return ans
# Time Complexity: O(N²)
#   - N = length of string
#   - For each position i: check 2 centers (odd and even)
#   - Each expand operation can go up to O(N) in worst case
#   - Total: O(N × N) = O(N²)
#   - In practice, often faster than DP due to early termination
# Space Complexity: O(1)
#   - Only using a few variables (count, i, j)
#   - No additional data structures needed
#   - Much better than O(N²) space of DP approach
```