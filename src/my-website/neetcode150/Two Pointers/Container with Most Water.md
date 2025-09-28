---
tags:
 - Medium
---

https://leetcode.com/problems/container-with-most-water/

Move left and right pointer until a possible bigger area, ie the height is higher than min_height of current l and r pointer.

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        ans = 0
        while l < r:
            min_h = min(height[l], height[r])
            area = min_h * (r - l)
            ans = max(ans, area)
            while l < r and height[l] <= min_h:
                l += 1
            while l < r and height[r] <= min_h:
                r -= 1
           
        return ans
# Time Complexity: O()
# Space Complexity: O()
```