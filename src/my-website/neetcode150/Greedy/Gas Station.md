---
tags:
 - Medium
---

https://leetcode.com/problems/gas-station

If total cost < total gas: there is a valid solution. then just iterate through each index taking it as the start point. If the gas remaining ever becomes negative, move on to the next start point. As long as gas never goes to negative + we know that total gas > total cost, this is the valid start point.

```python
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
             return -1
        start = 0
        total = 0
        for i, (g, c) in enumerate(zip(gas, cost)):
            total += (g - c)
            if total < 0:
                total = 0
                start = i+1
        return start
            
# Time Complexity: O(N)
# Space Complexity: O(1)
```