---
tags:
 - Medium
---

https://leetcode.com/problems/product-of-array-except-self/

- prefix and suffix sum but cleverly use the answer array to do intermediate operations
- use a temp variable to store the running product, multiply the result by the temp first before multiplying the temp so that `except self` is achieved

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1] * n
        
        temp = 1
        for i in range(n):
            ans[i] *= temp
            temp *= nums[i]
            
        temp = 1
        for i in range(n-1, -1, -1):
            ans[i] *= temp
            temp *= nums[i]
        
        return ans
        
# Time Complexity: O(N)
# Space Complexity: O(N)
```