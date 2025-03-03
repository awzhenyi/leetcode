---
tags:
 - Medium
---

https://leetcode.com/problems/coin-change-ii/


Bottom up 2D-DP
O(N * Amount) space
1. need additional row and column for 0 amount and 0 coins - make base case where no coins are considered. and for 0 amount 1 way to make it (no coins) 
```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        n = len(coins)
        dp = [[0]*(n+1) for _ in range(amount+1)]
        # 1 way to make 0 amount
        for i in range(n+1):
            dp[0][i] = 1

        for i in range(1, n+1):
            for amt in range(amount+1):
                if amt < coins[i-1]:
                    dp[amt][i] = dp[amt][i-1]
                else:
                    dp[amt][i] = dp[amt][i-1] + dp[amt-coins[i-1]][i]

        return dp[-1][-1]
                
# Time Complexity: O(NM) n = number of coins, m = amount
# Space Complexity: O(NM)
```

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

# Time Complexity: O(NM) n = number of coins, m = amount
# Space Complexity: O(N)
```