---
sidebar_position: 4
tags:
 - Medium
---

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

## Problem Understanding
Find the maximum profit from buying and selling stocks with a **cooldown constraint**: after selling, you cannot buy on the next day (must wait one day).

## Key Insight: State Machine
At each day, you're in one of two states:
- **Not holding** (can buy or skip)
- **Holding** (can sell or hold)

The cooldown means: if you sell on day `i`, you must skip day `i+1` (cooldown), so the next possible buy is day `i+2`.

## Approach 1: Top-Down Memoization (Recursive)
Use recursion with memoization to explore all possibilities.

**State**: `dp(i, holding)` = max profit from day `i` onwards, given current holding state

**Transitions**:
- If **holding**: can sell (skip next day due to cooldown → `i+2`) or hold
- If **not holding**: can buy or skip

**Base case**: Beyond array bounds, profit is 0

1. Top Down Memoization
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        cache = {}

        def dp(i, holding):
            if i >= n:
                return 0

            if (i, holding) in cache:
                return cache[(i, holding)]

            if holding:
                # sell or hold
                res = max(
                    prices[i] + dp(i + 2, False),  # sell
                    dp(i + 1, True)                # hold
                )
            else:
                # buy or skip
                res = max(
                    -prices[i] + dp(i + 1, True), # buy
                    dp(i + 1, False)               # skip
                )

            cache[(i, holding)] = res
            return res

        return dp(0, False)
# Time Complexity: O(N)
#   - Each state (i, holding) is computed at most once
#   - There are 2N possible states (N days × 2 holding states)
#   - Each state computation is O(1)
# Space Complexity: O(N)
#   - Cache stores at most 2N states
#   - Recursion stack depth is at most N
```

## Approach 2: Bottom-Up DP with Arrays
Build up the solution iteratively using two arrays to track states.

**State Arrays**:
- `buy_dp[i]` = max profit up to day `i` if we end with a buy (or hold after buying)
- `sell_dp[i]` = max profit up to day `i` if we end with a sell (or skip after selling)

**Transitions**:
- **Buy**: Either keep previous buy state, or buy today (must wait 2 days after last sell due to cooldown → `sell_dp[i-2]`)
- **Sell**: Either keep previous sell state, or sell today (profit = previous buy profit + current price)

**Initialization**: `buy_dp[0] = -prices[0]` (buy on first day costs money)

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        # Let i represent max profit where last action is buy / sell at index i
        buy = [0] * n
        sell = [0] * n
    
        for i, price in enumerate(prices):
            if i == 0:
                buy[i] = -price
            else:
                buy[i] = max(buy[i - 1], sell[i-2] - price)
                sell[i] = max(buy[i - 1] + price, sell[i - 1])

        return sell[n-1]

# Time Complexity: O(N)
#   - Single pass through the array
#   - Each iteration does O(1) work
# Space Complexity: O(N)
#   - Two arrays of size N
# Note: This code has a potential bug - when i=1, accessing sell_dp[i-2] = sell_dp[-1] 
#       would access the wrong element. Should use: sell_dp[i-2] if i >= 2 else 0
```

## Approach 3: Space-Optimized O(1) Solution
Since we only need previous values (`buy_dp[i-1]`, `sell_dp[i-1]`, `sell_dp[i-2]`), we can use variables instead of arrays.

**Key Observation**: 
- Only need `buy_dp[i-1]` (previous buy state)
- Only need `sell_dp[i-1]` (previous sell state)  
- Only need `sell_dp[i-2]` (sell state from 2 days ago, for cooldown)

**Variables**:
- `buy_prev` = `buy_dp[i-1]`
- `sell_prev` = `sell_dp[i-1]`
- `sell_prev2` = `sell_dp[i-2]`

Update these variables as we iterate through the array.

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:  
        n = len(prices)
        buy_prev = -prices[0] #buy_dp[i-1] 
        sell_prev = 0 #sell_dp[i-1]
        sell_prev2 = 0 #sell_dp[i-2]
        for i in range(1, n):
            buy_curr = max(buy_prev, sell_prev2 - prices[i])
            sell_curr = max(sell_prev, buy_prev + prices[i])

            #update
            buy_prev = buy_curr
            sell_prev2 = sell_prev
            sell_prev = sell_curr
        
        return sell_prev #This would be the max profit after n days
# Time Complexity: O(N)
#   - Single pass through the array
#   - Each iteration does O(1) work
# Space Complexity: O(1)
#   - Only using 3 variables regardless of input size
#   - No arrays or extra data structures needed
# Note: sell_prev2 = 0 initially handles the edge case when i < 2 (no previous sell 2 days ago)
```