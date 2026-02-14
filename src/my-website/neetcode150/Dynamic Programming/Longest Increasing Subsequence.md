---
tags:
 - Medium
---

https://leetcode.com/problems/longest-increasing-subsequence/

## Problem Understanding
Find the length of the longest strictly increasing subsequence. A subsequence is a sequence that can be derived from the array by deleting some elements without changing the order.

**Example**: `[10,9,2,5,3,7,101,18]` → LIS is `[2,3,7,18]` or `[2,5,7,101]` → length is 4

## Approach 1: Dynamic Programming (O(N²))
For each position, check all previous positions and extend the longest subsequence ending there.

**State**: `dp[i]` = length of longest increasing subsequence ending at index `i`

**Intuition**: 
- At each position, we ask: "What's the longest subsequence I can be part of?"
- We check all previous positions and see if we can extend their subsequences

**Logic**:
- Initialize all `dp[i] = 1` (each element alone is a subsequence of length 1)
- For each `i`, check all `j < i`:
  - If `nums[i] > nums[j]`, we can extend the subsequence ending at `j`
  - Update: `dp[i] = max(dp[i], dp[j] + 1)` (take the best extension)
- Answer is the maximum value in `dp[]` (longest subsequence ending anywhere)

**Why it works**: By checking all previous positions, we consider all possible ways to extend subsequences. The DP table stores optimal solutions for subproblems.

1. 1D Bottom up dynamic programming
```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n
        for i in range(n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)

# Time Complexity: O(N²)
#   - Outer loop: iterate through all N elements
#   - Inner loop: for each element, check all previous elements (up to N-1)
#   - Total: O(N × N) = O(N²)
# Space Complexity: O(N)
#   - DP array of size N
#   - Stores LIS length ending at each position
```

## Approach 2: Binary Search (O(N log N)) - Optimal
Instead of tracking actual subsequences, we track the **smallest tail value** for each possible subsequence length.

**Key Insight**: 
- `lis[i]` = smallest tail value among all increasing subsequences of length `i+1`
- Example: If we have subsequences `[2,5]` and `[2,3]`, both have length 2, but `3` is the smaller tail
- This array stays sorted (by construction), allowing binary search

**Intuition**: 
- We want the smallest possible tail for each length (greedy approach)
- Smaller tails make it easier for future numbers to extend the subsequence
- We're optimizing for future possibilities, not building the actual LIS

**Logic**:
- For each number:
  - If it's larger than all tails → append it (creates new longest subsequence)
  - Else → replace the smallest tail ≥ current number (improves future possibilities)
- The length of `lis[]` is the answer

**Why it works**:
- We're not building the actual LIS, just tracking minimum tails for each length
- Replacing a tail doesn't change the length, but gives us a better (smaller) tail
- A smaller tail makes it more likely that future numbers can extend the subsequence
- Binary search finds where to insert/replace in O(log N) time

**Example**: `[10,9,2,5,3,7,101,18]`
- `10` → `[10]`
- `9` → `[9]` (replace 10, smaller tail)
- `2` → `[2]` (replace 9)
- `5` → `[2,5]` (append, larger than 2)
- `3` → `[2,3]` (replace 5, smaller tail)
- `7` → `[2,3,7]` (append)
- `101` → `[2,3,7,101]` (append)
- `18` → `[2,3,7,18]` (replace 101, smaller tail)
- Length = 4 ✓

2. Binary Search
- Form the LIS

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        lis = []
        for num in nums:
            if not lis or num > lis[-1]:
                lis.append(num)
            else:
                idx = bisect.bisect_left(lis, num)
                lis[idx] = num
        return len(lis)
# Time Complexity: O(N log N)
#   - Outer loop: iterate through all N elements
#   - Binary search: O(log N) to find insertion/replacement position
#   - Total: O(N × log N) = O(N log N)
# Space Complexity: O(N)
#   - `lis` array can grow up to size N (if entire array is increasing)
#   - In worst case, stores all elements
```
