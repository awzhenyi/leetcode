---
tags:
 - Easy
---

https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum

```python
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        most_neg = 0
        curr = 0
        for num in nums:
            curr += num
            most_neg = min(most_neg, curr)
        
        return 1 - most_neg
# Time Complexity: O(N)
# Space Complexity: O(1)
```