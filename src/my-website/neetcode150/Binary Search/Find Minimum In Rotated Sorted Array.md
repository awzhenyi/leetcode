---
sidebar_position: 2
tags:
 - Medium
---

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

- Think about how the array will look like when it's rotated.
- If the array is rotated N times (where N is the array length), it will be back to a fully sorted array. (Case A)
- Otherwise, it will have two sorted portions, where the left sorted portion contains larger values and the right sorted portion contains smaller values. (Case B)
- The minimum element will always be the first element of the right sorted portion (or the first element if fully sorted).

1. To figure which part of the array to search, compare the value at mid index to the value at right index (end of current search space)
2. If `nums[m] < nums[r]`: The mid element is in the right sorted portion (or the array is fully sorted). The minimum is at mid or to its left, so search left: `r = m`
3. Else (`nums[m] >= nums[r]`): The mid element is in the left sorted portion. The minimum must be to the right, so search right: `l = m + 1`
4. When the loop breaks, `l == r`, and `nums[l]` will be the smallest element.

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            m = (l + r) // 2
            if nums[m] < nums[r]:
                r = m 
            else:
                l = m + 1
        return nums[l]

# Time Complexity: O(log N)
# Space Complexity: O(1)
```