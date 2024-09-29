---
tags:
 - Medium
---

https://leetcode.com/problems/coin-change

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
# Time Complexity: O(S * amount), s = number of coins
# Space Complexity: O(N)
```

bottom up. let dp[i] represent the minimum amount of coins to fulfil an amount of i.

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
# Space Complexity: O(N)
```