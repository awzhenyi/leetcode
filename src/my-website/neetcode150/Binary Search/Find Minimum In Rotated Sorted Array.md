---
tags:
 - Medium
---

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        ans = inf
        while l < r:
            mid = (l + r) // 2
            if nums[mid] < nums[r]: #handle the two cases
                ans = min(ans, nums[mid])
                r = mid
            else:
                l = mid + 1
        
        return min(nums[l], ans) #nums[l] incase theres only 1 item in list
# Time Complexity: O(log N)
# Space Complexity: O(1)
```