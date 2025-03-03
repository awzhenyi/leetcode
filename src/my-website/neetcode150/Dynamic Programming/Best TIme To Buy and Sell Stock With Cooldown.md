---
tags:
 - Medium
---

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:  
        n = len(prices)
        buy_dp = [0] * n #max profit at day i where the action is buy
        sell_dp = [0] * n #max profit at day i where the action is sell
        buy_dp[0] = -prices[0]
        for i in range(1, n):
            buy_dp[i] = max(buy_dp[i-1], sell_dp[i-2] - prices[i])
            sell_dp[i] = max(sell_dp[i-1], buy_dp[i-1] + prices[i])

        return sell_dp[n-1] #This would be the max profit after n days
# Time Complexity: O(N)
# Space Complexity: O(N)
```

Space Optimization to O(1), only tracking variables. observation: in the above solution u realized that u only need variables buy_dp[i-1], sell_dp[i-2] and buy_dp[i-1]

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
# Space Complexity: O(1)
```