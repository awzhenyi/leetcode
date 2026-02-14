---
tags:
 - Medium
---

https://leetcode.com/problems/partition-equal-subset-sum/

## Problem Understanding
Determine if an array can be partitioned into two subsets with equal sum. Each element can only be used once.

**Key Observation**: If total sum is odd, it's impossible. If even, we need to find a subset that sums to `total // 2`.

## Key Insight: Only Track One Subset
Instead of tracking both subsets (which causes state explosion), we only track one subset and see if it can reach `total // 2`.

**Why this works**:
- If one subset sums to `total // 2`, the remaining elements automatically sum to `total // 2`
- This reduces the problem to: "Can we form a subset that sums to `total // 2`?"
- This is a classic **0/1 Knapsack** problem (each item can be taken or not)

## Approach 1: Top-Down Memoization (Recursive)
Use recursion with memoization to explore all subset possibilities.

**State**: `dp(i, subset_sum)` = can we form `subset_sum` using elements from index `i` onwards?

**Logic**:
- Base case: if `subset_sum == 0`, we've found a valid partition → return `True`
- Invalid case: if `i >= n` or `subset_sum < 0`, impossible → return `False`
- For each element, we have two choices:
  - Take it: `dp(i+1, subset_sum - nums[i])`
  - Skip it: `dp(i+1, subset_sum)`
- Return `True` if either choice works

**Memoization**: Cache results to avoid recomputing the same subproblems

1. Top Down Memoization
```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        n = len(nums)

        @cache
        def dp(i, subset_sum):
            if subset_sum == 0:
                return True
            if i >= n or subset_sum < 0:
                return False
            
            return dp(i+1, subset_sum - nums[i]) or dp(i+1, subset_sum)
        
        total = sum(nums)
        if total % 2 != 0:
            return False
        return dp(0, total // 2)
# Time Complexity: O(N × S)
#   - N = number of elements, S = target sum (total // 2)
#   - Each state (i, subset_sum) is computed at most once
#   - There are N × S possible states
#   - Each computation is O(1)
# Space Complexity: O(N × S)
#   - Cache stores at most N × S states
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP (Iterative)
Build up the solution using a 2D DP table.

**State**: `dp[i][j]` = can we form sum `j` using the first `i` elements?

**Logic**:
- Base case: `dp[i][0] = True` for all `i` (can always form sum 0 by taking nothing)
- For each element and each possible sum:
  - Option 1: Don't take current element → `dp[i][j] = dp[i-1][j]`
  - Option 2: Take current element (if `j >= nums[i-1]`) → `dp[i][j] = dp[i-1][j - nums[i-1]]`
  - Use OR to combine both options
- Answer is `dp[n][subset_sum]` (can we form target sum using all elements)

**Why 2D?**: We need to track both which elements we've considered and what sum we're trying to achieve.

2. Bottom up DP
```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        total = sum(nums)
        if total % 2 != 0:
            return False

        subset_sum = total // 2
        dp = [[False] * (subset_sum + 1) for _ in range(n + 1)]

        for i in range(n + 1):
            dp[i][0] = True

        for i in range(1, n + 1):
            curr = nums[i - 1]
            for j in range(1, subset_sum + 1):
                dp[i][j] = dp[i-1][j]
                if j >= curr:
                    dp[i][j] |= dp[i-1][j - curr]

        return dp[n-1][subset_sum]

# Time Complexity: O(N × S)
#   - N = number of elements, S = target sum (total // 2)
#   - Outer loop: iterate through N elements
#   - Inner loop: iterate through S possible sums
#   - Total: O(N × S)
# Space Complexity: O(N × S)
#   - 2D DP table of size (n+1) × (subset_sum+1)
#   - Stores boolean result for each (element, sum) combination
# Note: There's a potential bug - should return `dp[n][subset_sum]` not `dp[n-1][subset_sum]`
#       since we have n+1 rows (0 to n) and process all n elements
```
## Approach 3: 1D Space-Optimized DP (O(S) Space)
Since we only need the previous row's results, we can use a 1D array and update it in-place.

**Key Observation**: 
- `dp[i][j]` only depends on `dp[i-1][j]` and `dp[i-1][j - num]`
- We only need one row at a time, not the entire 2D table

**Critical: Iterate Backwards**
- We must iterate from `subset_sum` down to `num` (backwards)
- This ensures we use values from the **previous** iteration (before current `num` was processed)
- If we iterate forwards, we'd use values that already include the current `num`, allowing it to be used multiple times

**0/1 Knapsack vs Unbounded Knapsack**:
- **0/1 Knapsack** (this problem): Each item can be used **at most once**
  - Iterate **backwards** to prevent reusing the same item
  - `dp[j] = dp[j] OR dp[j - num]` uses old values (before processing `num`)
- **Unbounded Knapsack**: Each item can be used **unlimited times**
  - Iterate **forwards** to allow reusing the same item
  - `dp[j] = dp[j] OR dp[j - num]` uses new values (after processing `num`)

**Why backwards works**:
- When computing `dp[j]`, we read `dp[j - num]` which hasn't been updated yet in this iteration
- This `dp[j - num]` represents sums achievable **without** the current `num`
- So `dp[j] |= dp[j - num]` means "can we form sum `j` by adding current `num` to a sum formed without it?"

3. 1D Space Optimized DP

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        total = sum(nums)
        if total % 2 != 0:
            return False

        subset_sum = total // 2
        dp = [False] * (subset_sum + 1)
        dp[0] = True

        for num in nums:
            for j in range(subset_sum, num - 1, -1):
                dp[j] |= dp[j - num]
        return dp[subset_sum]
# Time Complexity: O(N × S)
#   - N = number of elements, S = target sum (total // 2)
#   - Outer loop: iterate through N elements
#   - Inner loop: iterate backwards through sums from subset_sum down to num
#   - Total: O(N × S) (same as 2D approach, but with better space)
# Space Complexity: O(S)
#   - Single 1D array of size (subset_sum + 1)
#   - Only stores results for current sums, not for each element
#   - Much better than O(N × S) when N is large
```