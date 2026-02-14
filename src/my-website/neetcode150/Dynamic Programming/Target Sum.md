---
tags:
 - Medium
---

https://leetcode.com/problems/target-sum

## Problem Understanding
Given an array of numbers, assign each number either a `+` or `-` sign to reach a target sum. Count how many ways this can be done.

**Example**: `nums = [1,1,1,1,1]`, `target = 3` → 5 ways (e.g., `+1+1+1+1-1`)

## Key Insight: Two Choices Per Element
For each number, we have two choices: add it or subtract it. We need to count all combinations that sum to the target.

**Challenge**: Sums can be negative, so we need to handle negative indices in arrays (or use offset/dictionary).

## Approach 1: Top-Down Memoization (Recursive)
Use recursion to explore all sign combinations, tracking the running sum.

**State**: `dp(i, running_sum)` = number of ways to reach target using elements from index `i` onwards, given current `running_sum`

**Logic**:
- Base case: if we've processed all elements (`i >= n`), check if `running_sum == target`
- For each element, try both options:
  - Add: `dp(i+1, running_sum + nums[i])`
  - Subtract: `dp(i+1, running_sum - nums[i])`
- Sum both possibilities to get total ways

**Memoization**: Cache results to avoid recomputing the same subproblems

Top Down With Memo

just keep running_sum and check if it is equal to target at the end
2 options: add or minus
```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        @cache
        def dp(i, running_sum):
            if i >= n:
                return running_sum == target
            return dp(i+1, running_sum+nums[i]) + dp(i+1, running_sum-nums[i])

        return dp(0, 0)

# Time Complexity: O(N × S)
#   - N = number of elements, S = range of possible sums (2 × sum(nums) + 1)
#   - Each state (i, running_sum) is computed at most once
#   - There are N × S possible states
#   - Each computation is O(1)
# Space Complexity: O(N × S)
#   - Cache stores at most N × S states
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP with Offset
Build up the solution iteratively, using an offset to handle negative sums in arrays.

**Key Challenge**: Array indices can't be negative, but sums can be. Solution: use an offset to shift all sums into positive range.

**Offset Strategy**:
- Possible sums range from `-total_sum` to `+total_sum`
- Array size: `2 × total_sum + 1` (covers all possible sums)
- Offset: `total_sum` (shifts `-total_sum` to index 0, `0` to index `total_sum`, `+total_sum` to index `2×total_sum`)

**State**: `dp[i][j]` = number of ways to achieve sum `(j - offset)` using first `i` elements

**Logic**:
- Base case: `dp[0][nums[0] + offset] = 1` and `dp[0][-nums[0] + offset] = 1` (two ways for first element)
- For each element and each possible sum:
  - If previous sum `j` is achievable, we can add or subtract current element
  - Update: `dp[i][j ± curr] += dp[i-1][j]`
- Answer: `dp[n-1][target + offset]`

Bottom up
```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        total_sum = sum(nums)
        if abs(target) > total_sum:
            return 0
        total = 2 * total_sum + 1
        dp = [[0] * total for _ in range(n)]
        offset = total_sum
        # base case
        dp[0][nums[0] + offset] += 1
        dp[0][-nums[0] + offset] += 1

        for i in range(1, n):
            curr = nums[i]
            for j in range(total):
                if dp[i - 1][j] != 0:
                    if j + curr < total:
                        dp[i][j + curr] += dp[i - 1][j]
                    if j - curr >= 0:
                        dp[i][j - curr] += dp[i - 1][j]

        return dp[n - 1][target + offset]

# Time Complexity: O(N × S)
#   - N = number of elements, S = range size (2 × total_sum + 1)
#   - Outer loop: iterate through N elements
#   - Inner loop: iterate through S possible sums
#   - Total: O(N × S)
# Space Complexity: O(N × S)
#   - 2D DP table of size N × (2 × total_sum + 1)
#   - Stores count of ways for each (element, sum) combination
```

## Approach 3: Space-Optimized Bottom-Up
Since we only need the previous row, use a 1D array and create a new one each iteration.

**Key Observation**: `dp[i][j]` only depends on `dp[i-1][j]`, so we only need one row at a time.

**Strategy**: 
- Use `dp` for current row, `new` for next row
- After processing each element, `dp = new` (update for next iteration)
- This avoids the need for a 2D table

**Why create new array?**: Unlike 0/1 knapsack, we can't update in-place because we need to read all values from previous iteration before updating (both `j + curr` and `j - curr` depend on old values).

Space Optimized Bottom Up
- Notice that we only depend on previous row result

```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        total_sum = sum(nums)
        if abs(target) > total_sum:
            return 0
        total = 2 * total_sum + 1
        dp = [0] * total
        offset = total_sum
        # base case
        dp[nums[0] + offset] += 1
        dp[-nums[0] + offset] += 1

        for i in range(1, n):
            curr = nums[i]
            new = [0] * total
            for j in range(total):
                if dp[j] != 0:
                    if j + curr < total:
                        new[j + curr] += dp[j]
                    if j - curr >= 0:
                        new[j - curr] += dp[j]
            dp = new
        return dp[target + offset]
# Time Complexity: O(N × S)
#   - Same as approach 2: O(N × S)
#   - Still iterate through N elements and S possible sums
# Space Complexity: O(S)
#   - Two 1D arrays of size S (dp and new)
#   - Much better than O(N × S) when N is large
#   - Still need to create new array each iteration (can't update in-place)
```

## Approach 4: Dictionary-Based (Cleanest)
Use a dictionary to track achievable sums and their counts, avoiding offset complexity.

**Key Advantages**:
- **No offset needed**: Dictionaries handle negative keys naturally
- **Sparse storage**: Only stores sums that are actually achievable (not all possible sums)
- **Cleaner code**: No index arithmetic needed

**How it works**:
- `dic[sum]` = number of ways to achieve that sum
- For each number, create `new_dic` with all possible extensions:
  - For each achievable sum `k` with `v` ways, add `k + num` and `k - num` to `new_dic`
  - Count carries over: `new_dic[k ± num] += v`
- Update: `dic = new_dic` for next iteration

**Trade-off**: 
- Uses more memory per entry (dictionary overhead)
- But only stores achievable sums (sparse), which is often better when sums are sparse

Using dictionary
- costs more memory but not an issue due to total sum being low
- gracefully handles negative value without offset

```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dic = defaultdict(int)
        dic[nums[0]] += 1
        dic[-nums[0]] += 1
        for num in nums[1:]:
            new_dic = defaultdict(int)
            for k, v in dic.items():
                new_dic[k + num] += v
                new_dic[k - num] += v
            dic = new_dic
        return dic[target]

# Time Complexity: O(N × K)
#   - N = number of elements
#   - K = number of unique achievable sums (can be up to 2^N in worst case)
#   - For each element, iterate through all current sums and create 2 new sums
#   - In practice, K is often much smaller than 2^N due to overlapping sums
# Space Complexity: O(K)
#   - Dictionary stores at most K unique sums
#   - Each sum entry has overhead, but only stores achievable sums (sparse)
#   - Often better than O(N × S) when sums are sparse
```