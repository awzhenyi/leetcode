---
sidebar_position: 3
tags:
 - Medium
---

https://leetcode.com/problems/coin-change-ii/

## Problem Understanding
Count the number of ways to make a given amount using coins (each coin can be used unlimited times). This is different from Coin Change I, which finds the minimum number of coins.

## Key Insight: Dynamic Programming
For each amount, count all possible ways to make it by trying each coin. The key difference from Coin Change I is that we're counting combinations, not finding minimums.

## Approach 1: 2D DP (Bottom-Up)
Track both the amount and which coins we've considered so far.

**State**: `dp[amt][i]` = number of ways to make amount `amt` using the first `i` coins

**Logic**:
- Base case: `dp[0][i] = 1` for all `i` (1 way to make amount 0: use no coins)
- For each coin and each amount:
  - If amount < coin value: can't use this coin → `dp[amt][i] = dp[amt][i-1]`
  - Else: can either skip this coin OR use it → `dp[amt][i] = dp[amt][i-1] + dp[amt-coin][i]`
  - Note: `dp[amt-coin][i]` (not `i-1`) because we can use the same coin multiple times

**Why 2D?**: We need to track which coins we've considered to avoid counting duplicate combinations differently.

Bottom up 2D-DP
O(N * Amount) space
1. need additional row for 0 amount, using any coins, there is only one way of making 0 amount. (base case)
```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        n = len(coins)
        dp = [[0] * n for _ in range(amount + 1)]
        for i in range(n):
            dp[0][i] = 1
        
        for i in range(n):
            coin = coins[i]
            for amt in range(amount + 1):
                if amt - coin >= 0:                
                    dp[amt][i] = dp[amt-coin][i] + dp[amt][i - 1]
                else:
                    dp[amt][i] = dp[amt][i - 1]
        return dp[amount][-1]

                        
# Time Complexity: O(N * M)
#   - N = number of coins, M = amount
#   - Outer loop: iterate through N coins
#   - Inner loop: iterate through M amounts
#   - Total: O(N * M)
# Space Complexity: O(N * M)
#   - 2D DP table of size (amount+1) × (n+1)
```

## Approach 2: 1D DP Optimization (Space-Optimized)
Since we only need the previous coin's results, we can use a 1D array.

**Key Insight**: 
- Process coins one at a time
- For each coin, update all amounts that can be made using it
- `dp[amt] += dp[amt - coin]` means: "add all ways to make (amt-coin) to ways to make amt"

**Why it works**:
- By processing coins in order, we naturally build up combinations
- `dp[amt - coin]` already includes all ways using previous coins
- Adding the current coin gives us all ways including this coin

**Order matters**: Outer loop over coins, inner loop over amounts (ensures we don't count permutations, only combinations)

Optimize to 1D array

```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1  # One way to make amount 0 (by taking nothing)

        for coin in coins:
            for amt in range(coin, amount + 1):
                dp[amt] += dp[amt - coin]

        return dp[amount]

# Time Complexity: O(N * M)
#   - N = number of coins, M = amount
#   - Outer loop: iterate through N coins
#   - Inner loop: iterate through amounts from coin to M
#   - Total: O(N * M)
# Space Complexity: O(M)
#   - Single DP array of size (amount + 1)
#   - M = amount, so O(M) space
```