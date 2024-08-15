---
tags:
 - Medium
---

https://leetcode.com/problems/maximum-subarray/

1. kadine algorithm. reset tmp when its below 0

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = -inf
        tmp = 0
        for num in nums:
            if tmp < 0:
                tmp = 0
            tmp += num
            ans = max(ans, tmp)
        return ans
            
            
# Time Complexity: O(N)
# Space Complexity: O(1)
```