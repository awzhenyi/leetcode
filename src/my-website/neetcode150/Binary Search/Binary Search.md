---
sidebar_position: 1
tags:
 - Easy
---

https://leetcode.com/problems/binary-search

1. Keep target in search space, as a generic template. do the processing after the binary search ends.
2. Since mid = (l + r) // 2 means that mid == left if there are only 2 elements (eg: l = 0, r = 1, mid = 0), then l = mid cannot be a possible cutoff. If not you will get stuck in infinite loop
3. which makes the if condition: nums[mid] >= target: r = mid. else: l = mid + 1
4. check the remaining idx: if nums[l] == target. with `l < r` as the while condition, the loop will break when l == r.

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if nums[mid] >= target:
                r = mid
            else:
                l = mid + 1
        return l if nums[l] == target else -1
# Time Complexity: O(log N)
# Space Complexity: O(1)
```

Extension: (given a sorted array with duplicate values, find the range of indexes that the target value exists.)
Python's bisect_left, bisect_right

```python
from typing import List

class Solution:
    def bisect_left(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) // 2
            if nums[mid] < target: #Think about when u want to move l to mid + 1. only if the nums[mid] strictly less than target.
                l = mid + 1
            else:
                r = mid
        return l  # Leftmost position to insert target

    def bisect_right(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) // 2
            if nums[mid] <= target: #Think about when u want to move l to mid + 1. only if the nums[mid] less than or equal to target 
                l = mid + 1
            else:
                r = mid
        return l  # Rightmost position to insert target

    def search_range(self, nums: List[int], target: int) -> List[int]:
        left = self.bisect_left(nums, target)
        # Check if target exists at the leftmost position
        if left == len(nums) or nums[left] != target:
            return [-1, -1]
        
        right = self.bisect_right(nums, target) - 1  # Adjust because `bisect_right` gives one past the last occurrence
        return [left, right]

# Time Complexity: O(log n)
# Space Complexity: O(1)
```