---
tags:
 - Medium
---

https://leetcode.com/problems/search-in-rotated-sorted-array

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l < r:
            mid = (l + r) // 2
            # left sorted portion
            if nums[l] <= nums[mid]:
                if target > nums[mid] or target < nums[l]:
                    l = mid + 1
                else:
                    r = mid
            # right sorted portion
            else:
                if target <= nums[mid] or target > nums[r]:
                    r = mid
                else:
                    l = mid + 1
        return l if nums[l] == target else -1
# Time Complexity: O(log N)
# Space Complexity: O(1)
```