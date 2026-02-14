---
sidebar_position: 2
tags:
 - Medium
---

https://leetcode.com/problems/coin-change

## Problem Understanding
Find the minimum number of coins needed to make a given amount. You can use each coin unlimited times. Return -1 if it's impossible.

## Key Insight: Dynamic Programming
For each amount, try all possible coins and take the minimum. The recurrence relation is:
- `dp[i] = min(dp[i], 1 + dp[i - coin])` for all coins

## Approach 1: Top-Down Memoization (Recursive)
Build up from 0, trying to reach the target amount by adding coins.

**State**: `dp(amt)` = minimum coins needed to go from current `amt` to target `amount`

**Logic**:
- Start with `amt = 0` (no coins used yet)
- Try each coin: add it to current amount and recurse
- Base case: if `amt == amount`, we've reached the target (need 0 more coins)
- Invalid case: if `amt > amount`, return infinity (impossible)

**Memoization**: Cache results to avoid recomputing the same subproblems

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        cache = {}
        def dp(amt):
            if amt == amount:
                return 0
            if amt > amount:
                return 2**31 + 1
            if amt in cache:
                return cache[amt]
            res = 2**31 + 1
            for coin in coins:
                res = min(res, 1 + dp(amt + coin))    
            cache[amt] = res
            return res
        ans = dp(0)
        return ans if ans != 2**31 + 1 else -1
# Time Complexity: O(S * amount)
#   - S = number of coin denominations
#   - For each amount from 0 to amount, we try all S coins
#   - With memoization, each subproblem is computed once
# Space Complexity: O(amount)
#   - Cache stores results for each amount value (0 to amount)
#   - Recursion stack depth is at most amount
```

## Approach 2: Bottom-Up DP (Iterative)
Build up the solution from smaller amounts to larger amounts.

**State**: `dp[i]` = minimum number of coins needed to make amount `i`

**Logic**:
- Initialize `dp[0] = 0` (0 coins needed for amount 0)
- For each amount `i` from 1 to `amount`:
  - Try each coin: if `i >= coin`, we can use this coin
  - Update: `dp[i] = min(dp[i], 1 + dp[i - coin])`
  - This means: "to make amount i, use 1 coin + minimum coins for amount (i - coin)"

**Why it works**: 
- We solve smaller subproblems first
- When computing `dp[i]`, all smaller amounts are already computed
- The answer is `dp[amount]`

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [2**31 + 1] * (amount + 1)
        dp[0] = 0
        for i in range(amount+1):
            for coin in coins:
                if i - coin >= 0:
                    dp[i] = min(dp[i], 1 + dp[i-coin])

        return dp[amount] if dp[amount] != 2**31 + 1 else -1
# Time Complexity: O(S * amount)
#   - Outer loop: iterate through all amounts (0 to amount) = O(amount)
#   - Inner loop: try all S coin denominations = O(S)
#   - Total: O(S * amount)
# Space Complexity: O(amount)
#   - DP array of size (amount + 1)
#   - No recursion stack needed (iterative approach)
```