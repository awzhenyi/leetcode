---
tags:
 - Medium
---

keep track of max, min at every computation. Because two negatives can make positive. at every computation, also update res = max(res, max_so_far). Since it is subarray, do reset at every index. 

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        max_so_far = nums[0]
        min_so_far = nums[0]
        ans = max_so_far
        for i in range(1, n):
            temp_max = max(nums[i], max_so_far * nums[i], min_so_far * nums[i])
            min_so_far = min(nums[i], max_so_far * nums[i], min_so_far * nums[i])
            max_so_far = temp_max
            ans = max(ans, max_so_far)
        return ans

# Time Complexity: O(N)
# Space Complexity: O(1)
```