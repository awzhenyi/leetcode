---
tags:
 - Hard
---

https://leetcode.com/problems/burst-balloons

## Problem Understanding
Given an array of balloons, each with a value. When you burst a balloon, you get coins equal to `left × current × right` (neighbors' values). Find the maximum coins you can collect by bursting all balloons.

**Challenge**: The order matters! Bursting a balloon changes which balloons are neighbors.

## Key Insight: Think Backwards (Last Balloon to Burst)
Instead of thinking "which balloon to burst first", think "which balloon to burst **last**".

**Why this works**:
- When you burst the last balloon `k` in range `[i, j]`, you get `nums[i] × nums[k] × nums[j]` coins
- At this point, balloons `i` and `j` are still there (they're boundaries, not burst yet)
- The range splits into two independent subproblems: `[i, k]` and `[k, j]`
- This creates optimal substructure for DP

**Boundary Trick**: Add `[1]` at both ends to handle edge cases (balloons at the ends always have neighbors with value 1).

## Approach 1: Top-Down Memoization (Recursive)
Use recursion to explore all possibilities of which balloon to burst last.

**State**: `dp(i, j)` = maximum coins from bursting all balloons in range `(i, j)` (exclusive boundaries)

**Logic**:
- Base case: if `i > j` or `i + 1 >= j`, no balloons between → return 0
- For each possible last balloon `k` in range `(i, j)`:
  - Coins from bursting `k` last: `nums[i] × nums[k] × nums[j]`
  - Plus coins from left subproblem: `dp(i, k)`
  - Plus coins from right subproblem: `dp(k, j)`
- Take the maximum over all choices of `k`

**Why boundaries are exclusive**: `i` and `j` are not burst, they're just boundaries. We only burst balloons strictly between them.

**Memoization**: Cache results to avoid recomputing the same subproblems

```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        n = len(nums)

        @cache
        def dp(i, j):
            # no balloons between i and j
            if i > j:
                return 0

            best = 0
            for k in range(i + 1, j):
                best = max(
                    best,
                    nums[i] * nums[k] * nums[j]
                    + dp(i, k)
                    + dp(k, j)
                )
            return best

        return dp(0, n - 1)
# Time Complexity: O(N³)
#   - N = number of balloons (after adding boundaries)
#   - Each state (i, j) is computed at most once
#   - There are O(N²) possible states (i, j pairs)
#   - For each state, we try O(N) possible last balloons k
#   - Total: O(N² × N) = O(N³)
# Space Complexity: O(N²)
#   - Cache stores at most N² states (all possible i, j pairs)
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP (Iterative, Interval DP)
Build up the solution by processing intervals of increasing length.

**Key Pattern: Interval DP**
- Process intervals from smallest to largest
- For each interval `[i, j]`, try all possible last balloons `k` in between
- Use previously computed smaller intervals

**State**: `dp[i][j]` = maximum coins from bursting all balloons in range `(i, j)` (exclusive boundaries)

**Logic**:
- Process intervals by length: start with length 2, then 3, 4, ..., up to n
- For each interval `[i, j]` of a given length:
  - Try each balloon `k` in `(i, j)` as the last one to burst
  - Update: `dp[i][j] = max(dp[i][j], nums[i] × nums[k] × nums[j] + dp[i][k] + dp[k][j])`
- Answer: `dp[0][n-1]` (maximum coins for entire range)

**Why process by length?**: Smaller intervals must be computed before larger ones (they're dependencies).

```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n):
            for i in range(n - length):
                j = i + length
                for k in range(i + 1, j):
                    dp[i][j] = max(dp[i][j], nums[i] * nums[k] * nums[j] + dp[i][k] + dp[k][j])
        return dp[0][-1]

# Time Complexity: O(N³)
#   - N = number of balloons (after adding boundaries)
#   - Outer loop: iterate through interval lengths (2 to n-1) = O(N)
#   - Middle loop: iterate through starting positions = O(N)
#   - Inner loop: try all possible last balloons k = O(N)
#   - Total: O(N × N × N) = O(N³)
# Space Complexity: O(N²)
#   - 2D DP table of size N × N
#   - Stores maximum coins for each interval [i, j]
```