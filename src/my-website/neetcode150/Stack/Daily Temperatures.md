---
tags:
 - Medium
---

https://leetcode.com/problems/daily-temperatures/

keep a monotonically decreasing stack (with temperature and index). Every time you encounter a temperature higher than stack[-1][0], pop and fill the index based on the difference of i - stack[-1][1] -> index

```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0] * len(temperatures)
        stack = []
        for i, temperature in enumerate(temperatures):
            while stack and temperature > stack[-1][0]:
                t, j = stack.pop()
                ans[j] = i - j
            stack.append((temperature, i))
        return ans
# Time Complexity: O(N)
# Space Complexity: O(N)
```