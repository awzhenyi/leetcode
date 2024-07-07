---
sidebar position: 1,
tags: 
 - Easy
---

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

left pointer to be buy time, anytime you encounter a lower price move l = r, while l is not moving calculate max profit.

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        l = 0
        for r in range(len(prices)):
            if prices[r] < prices[l]:
                l = r
            elif prices[r] > prices[l]:
                max_profit = max(max_profit, prices[r]-prices[l])
        return max_profit

# Time Complexity: O(N)
# Space Complexity: O(1)
```